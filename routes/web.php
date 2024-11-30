<?php

use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use App\Http\Middleware\CacheControl;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(PublicController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/chi-siamo', 'about')->name('about');
    Route::get('/cosa-facciamo', 'expertise')->name('expertise');
    Route::get('/eventi', 'events')->name('events');
    Route::get('/eventi/{slug}', 'eventShow')->name('public.event.show');
    Route::get('/collaborations', 'gallery')->name('collaborations');
    Route::get('/contatti', 'contacts')->name('contacts');

    Route::get('/laboratori-per-scuole', 'laboratories')->name('laboratories');
    Route::get('/formazione', 'training')->name('training');
    Route::get('/emporio-dei-materiali', 'emporium')->name('emporium');
    Route::get('/laboratori-per-altri-enti', 'other')->name('other');
    Route::get('/aziende', 'agency')->name('agency');
    Route::get('/laboratori-speciali', 'special')->name('special');

    Route::post('/contact/schools', 'contactSchools')->name('contact.schools');
    Route::post('/contact/generic', 'contactGeneric')->name('contact.generic');
    Route::post('/contact/training', 'contactTraining')->name('contact.training');
    Route::post('/contact/emporium', 'contactEmporium')->name('contact.emporium');
});

Route::controller(AdminPanelController::class)->group(function () {
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', 'index')->name('dashboard');
    });
});

Route::middleware('auth')->group(function () {
    Route::resource('event', EventController::class)->withoutMiddleware(CacheControl::class);
});

Route::middleware('auth')->group(function () {
    Route::resource('image', ImageController::class)->withoutMiddleware(CacheControl::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

require __DIR__.'/auth.php';
