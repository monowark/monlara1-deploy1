<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //this method will returns all active services
    public function index() {
        $services = Service::where('status',1)->orderBy('created_at', 'DESC' )->get();
            return response()->json([
                'status' => true,
                'data' => $services
            ]);

    }
   //this method will returns latest active services
    public function latestServices(Request $request) {
        $services = Service::where('status',1)
                    ->take($request->get('limit'))
                    ->orderBy('created_at', 'DESC' )->get();
        return response()->json([
         'status' => true,
         'data' => $services
        ]);
        //return $services;
    }

    //this method will return a single service
    public function service($id) {
        $service = Service::find($id);

        if ($service == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found.'
            ]);            
        }
        
            return response()->json([
                'status' => true,
                'data' => $service
            ]);
    }
}
