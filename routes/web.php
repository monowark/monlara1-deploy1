<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Models\Project;
/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::get('/', function () {
    $projects = Project::all();
        return view('welcome', compact('projects'));
});

Route::get('/migrate-seed', function () {
    Artisan::call('migrate:fresh', ['--seed' => true]);
    return 'Migration and seeding completed successfully.';
});

Route::get('/migrate', function () {
    Artisan::call('migrate');
    return 'Migration and seeding completed successfully.';
});

Route::get('/clear', function () {
    Artisan::call('config:cache');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return 'Cached clear and config cached successfully.';
});


