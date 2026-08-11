<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'jedah-main', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::inertia('english-course', 'english-course')->name('english-course');

Route::inertia('speaking-club', 'speaking-club')->name('speaking-club');

Route::inertia('private-lessons', 'private-lessons')->name('private-lessons');

Route::inertia('reading-club', 'reading-club')->name('reading-club');

Route::inertia('mami-squad', 'mami-squad')->name('mami-squad');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
