<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function home() {
        return Inertia::render('Public/Home');
    }

    public function about() {
        return Inertia::render('Public/About');
    }

    public function expertise() {
        return Inertia::render('Public/Expertise');
    }

    public function events() {
        return Inertia::render('Public/Events');
    }

    public function contacts() {
        return Inertia::render('Public/Contacts');
    }
}
