<?php

namespace App\Traits;

use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

trait CloudinaryImageHandler {
    protected function uploadImageToCloudinary($image) {
        $nameGen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        $imgManager = new ImageManager(new Driver());
        $thumbImage = $imgManager->read($image)->scaleDown(width: 800);
        
        $savePath = public_path('upload/cloudinary/' . $nameGen);
        $thumbImage->save($savePath);

        if (File::exists($savePath)) {
            $uploadedFileUrl = Cloudinary::upload($savePath)->getSecurePath();
            File::delete($savePath);
            return $uploadedFileUrl;
        }

        throw new \Exception('Image upload failed.');
    }

    protected function deleteImageFromCloudinary($image_url) {
        $publicId = basename($image_url, '.' . pathinfo($image_url, PATHINFO_EXTENSION));
        Cloudinary::destroy($publicId);
    }
}