<?php

use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\Member\GoogleController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index']);

Route::middleware('guest')->group(function () {

    // USER
    Route::get('/geadmin2', [AuthController::class, 'index'])->name('geadmin2');
    Route::post('/geadmin2/login', [AuthController::class, 'login'])->name('geadmin2.login');

    // MEMBER
    Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login');

    Route::get('/login', [AuthController::class, 'index'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    
});


// ===================================================== GEADMIN2 ========================================================

Route::group(['prefix' => 'geadmin2', 'namespace' => 'geadmin2', 'as' => 'geadmin2.', 'middleware' => ['auth', 'web']], function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

// ========================================================================================================================


// ===================================================== USER ========================================================

Route::group(['middleware' => ['auth', 'webmember']], function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

// ========================================================================================================================
