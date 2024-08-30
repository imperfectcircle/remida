<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use CloudinaryLabs\CloudinaryLaravel\MediaAlly;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class Image extends Model
{
    use HasFactory;
    use MediaAlly;

    protected $fillable = [
        'title',
        'src',
    ];

    protected static function booted() {
        static::deleting(function ($image) {
            if ($image->src) {
                $publicId = basename($image->src, '.' . pathinfo($image->src, PATHINFO_EXTENSION));
                Cloudinary::destroy($publicId);
            }
        });
    }
}
