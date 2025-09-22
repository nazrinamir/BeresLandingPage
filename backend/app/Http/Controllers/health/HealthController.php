<?php

namespace App\Http\Controllers\health;

use App\Http\Controllers\Controller;
use DB;
use Illuminate\Http\Request;
use PDO;

class HealthController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'API is running',
            'status' => 'success',
            'version' => '1.0.0',
            'environment' => config('app.env'),
            'database' => config('database.default'),
            'database_connected' => DB::connection()->getPdo() ? true : false,
            'database_version' => DB::connection()->getPdo()->getAttribute(PDO::ATTR_SERVER_VERSION),
            'database_driver' => DB::connection()->getPdo()->getAttribute(PDO::ATTR_DRIVER_NAME),
            'laravel_version' => app()->version(),
            'laravel_environment' => config('app.env'),
            'laravel_debug' => config('app.debug'),
            'laravel_url' => config('app.url'),
            'laravel_timezone' => config('app.timezone'),
            'laravel_locale' => config('app.locale'),
            'laravel_fallback_locale' => config('app.fallback_locale'),
            'timestamp' => now(),
        ]);
    }
}
