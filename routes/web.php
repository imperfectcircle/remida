<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(PublicController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/chi-siamo', 'about')->name('about');
    Route::get('/cosa-facciamo', 'expertise')->name('expertise');
    Route::get('/eventi', 'events')->name('events');
    Route::get('/gallery', 'gallery')->name('gallery');
    Route::get('/contatti', 'contacts')->name('contacts');

    Route::get('/laboratori-per-scuole', 'laboratories')->name('laboratories');
    Route::get('/formazione', 'training')->name('training');
    Route::get('/emporio-dei-materiali', 'emporium')->name('emporium');
    Route::get('/laboratori-per-altri-enti', 'other')->name('other');
    Route::get('/aziende', 'agency')->name('agency');
    Route::get('/laboratori-speciali', 'special')->name('special');

    Route::post('/contact/schools', 'contactSchools')->name('contact.schools');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
