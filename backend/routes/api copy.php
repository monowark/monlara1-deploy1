<?php
use App\Http\Controllers\admin\AuthenticationController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('authenticate',[AuthenticationController::class, 'authenticate']);


//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');

Route::group(['middleware' => ['auth:sanctum']],function(){
    //Protected Routes
    Route::get('dashboard',[DashboardController::class, 'index']);
    Route::get('logout',[AuthenticationController::class, 'logout']);
    //Service Route
    Route::POST('services',[ServiceController::class, 'store']);
    Route::get('services',[ServiceController::class, 'index']);
    Route::put('services/{id}',[ServiceController::class, 'update']);
    Route::get('services/{id}',[ServiceController::class, 'show']);
    Route::delete('services/{id}',[ServiceController::class, 'destroy']);
    //Temp Image route
    Route::post('temp-images',[TempImageController::class, 'store']);
 });