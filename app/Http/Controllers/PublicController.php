<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Event;
use App\Models\Image;
use App\Mail\SchoolMail;
use App\Mail\GenericMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactSchoolRequest;
use App\Http\Requests\ContactGenericRequest;
use App\Http\Requests\ContactTrainingRequest;
use App\Mail\EmporiumMail;
use App\Mail\TrainingMail;

class PublicController extends Controller
{
    public function home() {
        $events = Event::where('status', 'published')->latest()->take(5)->get();
        $collaborations = Image::all();
        return Inertia::render('Public/Home', compact('events', 'collaborations'));
    }

    public function about() {
        return Inertia::render('Public/About');
    }

    public function expertise() {
        return Inertia::render('Public/Expertise');
    }

    public function events() {
        $events = Event::orderBy('updated_at', 'desc')->get();
        return Inertia::render('Public/Events', compact('events'));
    }

    public function eventShow($slug) {
        $event = Event::where('slug', $slug)->first();
        return inertia('Public/EventShow', compact('event'));
    }

    public function gallery() {
        $images = Image::all();
        return Inertia::render('Public/Gallery', compact('images'));
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

    public function contactSchools(ContactSchoolRequest $req) {
        $contact = $this->getContactDataFromRequest($req, true);
        if ($contact['school'] == 'nido') {
            Mail::to('nidi@remidavarese.it')->send(new SchoolMail($contact));
        } else {
            Mail::to('scuole@remidavarese.it')->send(new SchoolMail($contact));
        }

        return to_route('laboratories')->with('message', 'La mail è stata inviata correttamente');
    }

    public function contactGeneric(ContactGenericRequest $req) {
        $contact = $this->getContactDataFromRequest($req);
        Mail::to('info@remidavarese.it')->send(new GenericMail($contact));
        return back()->with('message', 'La mail è stata inviata correttamente');
    }

    public function contactTraining(ContactTrainingRequest $req) {
        $contact = $this->getContactDataFromRequest($req);
        Mail::to('formazione@remidavarese.it')->send(new TrainingMail($contact));
        return to_route('training')->with('message', 'La mail è stata inviata correttamente');
    }

    public function contactEmporium(ContactTrainingRequest $req) {
        $contact = $this->getContactDataFromRequest($req);
        Mail::to('emporio@remidavarese.it')->send(new EmporiumMail($contact));
        return back()->with('message', 'La mail è stata inviata correttamente');
    }

    private function getContactDataFromRequest(Request $req, $includeSchool = false) {
        $data = [
            'name' => $req->name,
            'email' => $req->email,
            'phone' => $req->phone,
            'message' => $req->message,
            'privacy' => $req->privacy,
        ];

        if ($includeSchool) {
            $data['school'] = $req->school;
        }

        return $data;
    }
}
