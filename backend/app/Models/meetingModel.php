<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class meetingModel extends Model
{
    protected $table = 'meeting';
    
    public $timestamps = true;
    
    protected $fillable = ['full_name', 'email', 'phone', 'business'];
}
