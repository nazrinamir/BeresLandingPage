<?php

namespace App\Http\Controllers\waitlist;

use App\Http\Controllers\Controller;
use App\Http\Requests\waitlistRequest;
use App\Models\waitlistModel;
use Illuminate\Http\Request;

class WaitlistController extends Controller
{
    public function index(){
        $waitlist = waitlistModel::query()->get();
        return response()->json($waitlist);
    }

    public function insertWaitlist(Request $request){
        
        dd($request->all());

        $request->validate(waitlistRequest::rules());

        $waitlist = waitlistModel::create($request->all());

        return response()->json($waitlist);
    }
}
