<?php

namespace App\Http\Controllers\waitlist;

use App\Http\Controllers\Controller;
use App\Http\Requests\waitlistRequest;
use App\Models\waitlistModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\WaitlistMail;

class WaitlistController extends Controller
{
    public function index()
    {
        $waitlist = waitlistModel::query()->get();
        return response()->json($waitlist);
    }

    public function insertWaitlist(waitlistRequest $request)
    {
        $waitlist = waitlistModel::create($request->all());

        // Send email to the submitted email
        Mail::to($waitlist->email)->send(new WaitlistMail());

        return response()->json([
            'success' => true,
            'message' => 'Waitlist created successfully & confirmation email sent',
            'data' => $waitlist
        ]);
    }
}
