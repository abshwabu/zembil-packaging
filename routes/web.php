<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\TagController;

Route::get('/', function () {
    $blogs = app(BlogController::class)->welcome();
    $tags = app(TagController::class)->welcome();
    
    return view('welcome', compact('blogs', 'tags'));
});

// Public routes without auth
Route::get('blogs/{blog}', [BlogController::class, 'show'])->name('blogs.show');
Route::get('tags/{tag}', [TagController::class, 'show'])->name('tags.show');
