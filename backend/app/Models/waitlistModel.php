<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class waitlistModel extends Model
{
    protected $table = 'waitlist';
    
    public $timestamps = true;
    
    protected $fillable = ['first_name', 'last_name', 'email', 'phone', 'business'];
}
