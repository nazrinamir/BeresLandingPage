<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    protected $except = [      
        // kalau route: POST /waitlist
        'api/*',         // atau whitelist semua di bawah /api
    ];
}

