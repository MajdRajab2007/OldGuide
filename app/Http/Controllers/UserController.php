<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function register(Request $request)
    {

        $incomingFields = $request->validate([
            'name' => ['required', 'min:2', 'max:10', Rule::unique('users', 'name'), 'alpha'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'min:8', 'max:200'],

        ]);


        $incomingFields['password'] = bcrypt($incomingFields['password']);

        $user = User::create($incomingFields);
        
        auth()->login($user);

        return redirect('http://192.168.1.111:3000');
    }
    
}
