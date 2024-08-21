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

    public function gallery() {
        return Inertia::render('Public/Gallery');
    }

    public function contacts() {
        return Inertia::render('Public/Contacts');
    }

    public function laboratories() {
        return Inertia::render('Public/Laboratories');
    }
    
    public function training() {
        return Inertia::render('Public/Training');
    }

    public function emporium() {
        return Inertia::render('Public/Emporium');
    }

    public function other() {
        return Inertia::render('Public/Other');
    }

    public function agency() {
        return Inertia::render('Public/Agency');
    }

    public function special() {
        return Inertia::render('Public/Special');
    }
}
