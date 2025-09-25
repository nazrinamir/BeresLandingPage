<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WaitlistMail extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Thank You for Joining the Waitlist')
                    ->view('emails.waitlist'); // point to blade
    }
}
