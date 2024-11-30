<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ImageResource;
use App\Traits\CloudinaryImageHandler;
use App\Http\Requests\StoreImageRequest;
use App\Http\Requests\UpdateImageRequest;

class ImageController extends Controller
{
    use CloudinaryImageHandler;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images = Image::paginate(10);

        return inertia('Images/Index', [
            'images' => ImageResource::collection($images),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Images/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreImageRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = $request->validated();
            $picture = new Image(Arr::except($data, 'image'));

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $uploadedFileUrl = $this->uploadImageToCloudinary($image);

                $picture->src = $uploadedFileUrl;
            }

            $picture->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        
        return to_route('image.create')->with('message', 'Collaborazione Creata con Successo.');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Image $image)
    {
        return inertia('Images/Edit', [
            'image' => new ImageResource($image),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateImageRequest $request, Image $image)
    {
        DB::beginTransaction();

        try {
            
            $data = $request->validated();
            
            $image->fill(Arr::except($data, 'image', 'slug'));

            if ($request->hasFile('image')) {
                if ($image->src) {
                    $this->deleteImageFromCloudinary($image->src);
                }
                
                $picture = $request->file('image');
                $uploadedFileUrl = $this->uploadImageToCloudinary($picture);
                $image->src = $uploadedFileUrl;
            }

            $image->save();

            DB::commit();

            return to_route('image.index')->with('message', 'Collaborazione Aggiornata con Successo.');
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $image)
    {
        $imageTitle = $image->title;
        $image->delete();
        return to_route('image.index')->with('message', "Collaborazione \"$imageTitle\" Cancellata con Successo.");
    }
}
