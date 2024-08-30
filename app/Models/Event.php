<?php

namespace App\Models;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use CloudinaryLabs\CloudinaryLaravel\MediaAlly;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    use MediaAlly;

    protected $fillable = [
        'title',
        'description',
        'status',
        'image_url',
    ];

    /**
     * The `booted` function in PHP is a protected static method that listens for the `deleting` event
     * and deletes the corresponding image from Cloudinary if it exists.
     */
    protected static function booted() {
        static::deleting(function ($event) {
            /* This code snippet is checking if the `image_url` attribute of the `Event` model is not
            empty. If the `image_url` is not empty, it extracts the public ID of the image from the
            URL and then uses Cloudinary's `destroy` method to delete the image from the Cloudinary
            storage based on that public ID. */
            if ($event->image_url) {
                $publicId = basename($event->image_url, '.' . pathinfo($event->image_url, PATHINFO_EXTENSION));
                Cloudinary::destroy($publicId);
            }
        });
    }
}
