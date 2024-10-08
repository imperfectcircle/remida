<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\EventResource;
use App\Traits\CloudinaryImageHandler;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;


class EventController extends Controller
{
    use CloudinaryImageHandler;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Event::query();

        $sortField = request('sort_field', 'created_at');
        $sortDirection = request('sort_direction', 'desc');

        if (request('title')) {
            $query->where('title', 'like', '%'. request('title'). '%');
        }
        if (request('status')) {
            $query->where('status', request('status'));
        }

        $events = $query->orderBy($sortField, $sortDirection)->paginate(10)->appends(request()->query());

        return inertia('Events/Index', [
            'events' => EventResource::collection($events),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Events/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = $request->validated();
            $event = new Event(Arr::except($data, 'image', 'slug'));

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $uploadedFileUrl = $this->uploadImageToCloudinary($image);

                $event->image_url = $uploadedFileUrl;
            }

            $event->slug = Str::slug($data['title'], '-');

            $event->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        return to_route('event.index')->with('message', 'Evento Creato con Successo.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        return inertia('Events/Edit', [
            'event' => new EventResource($event),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        
        DB::beginTransaction();

        try {
            
            $data = $request->validated();
            
            $event->fill(Arr::except($data, 'image', 'slug'));

            $event->slug = Str::slug($data['title'], '-');

            
            if ($request->hasFile('image')) {
                if ($event->image_url) {
                    $this->deleteImageFromCloudinary($event->image_url);
                }
                
                $image = $request->file('image');
                $uploadedFileUrl = $this->uploadImageToCloudinary($image);
                $event->image_url = $uploadedFileUrl;
            }

            $event->save();

            DB::commit();

            return to_route('event.index')->with('message', 'Evento Aggiornato con Successo.');
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $eventTitle = $event->title;
        $event->delete();
        return to_route('event.index')->with('message', "Evento \"$eventTitle\" Cancellato con Successo.");
    }

    
}
