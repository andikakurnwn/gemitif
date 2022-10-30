<?php

namespace App\Http\Controllers\User;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AuthController extends Controller
{


    public function index()
    {

        return Inertia::render('User/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function login(LoginRequest $request)
    {


        $request->authenticate();
        $request->session()->regenerate();

        return redirect()->route('geadmin2.dashboard');
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('geadmin2');
    }
}
