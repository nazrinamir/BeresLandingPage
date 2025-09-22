<?php

namespace App\Http\Controllers\meeting;

use App\Http\Controllers\Controller;
use App\Http\Requests\meetingRequest;
use App\Models\meetingModel;
use Illuminate\Http\Request;

class MeetingController extends Controller
{

    public function index()
    {

        $meetings = meetingModel::query()->get();
        return response()->json($meetings);
    }

    public function insertMeetingOneOnOne(Request $request)
    {
        $meeting = meetingModel::create($request->all());
        return response()->json(['success' => true, 'message' => 'Meeting created successfully', 'data' => $meeting]);
    }
}
