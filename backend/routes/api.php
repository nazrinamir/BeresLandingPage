<?php

use App\Http\Controllers\meeting\MeetingController;
use App\Http\Controllers\waitlist\WaitlistController;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json(['message' => 'API routes are working!']);
});

Route::prefix('waitlist')->group(function () {
    Route::get('/', [WaitlistController::class, 'index']);
    Route::post('/', [WaitlistController::class, 'insertWaitlist']);
});

Route::prefix('meeting')->group(function () {
    Route::get('/', [MeetingController::class, 'index']);
    Route::post('/', [MeetingController::class, 'insertMeetingOneOnOne']);
});