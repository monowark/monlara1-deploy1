<?php
namespace App\Http\Controllers\front;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactEmail;

class ContactController extends Controller
{
    public function index(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        //If no error then send email, so now I create an email class
        $mailData = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,
        ];
        Mail::to('admin@example.com')->send(new ContactEmail($mailData));
        //to send the mail I need to use email tracker at 'mailtrap.io'
            return response()->json([
                'status'=> true,
                'message' => 'Thanks for contacting us.'
            ]);
    }
}
