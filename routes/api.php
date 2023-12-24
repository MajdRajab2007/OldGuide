<?php

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//
Route::get('posts', function () {
    return response(Post::all(),200);
});
Route::get('posts/{post}', function ($postId) {
    return response()->json(Post::find($postId), 200);
});

Route::post('posts', function(Request $request) {
    $new_post = Post::create($request->all());
    return $new_post;
});

Route::put('posts/{post}', function(Request $request, $postId) {
    $post = Post::findOrFail($postId);
    $post->update($request->all());
    return $post;
});


Route::delete('posts/{post}',function($postId) {
    Post::find($postId)->delete();
    return 204;
});

Route::post('tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);
 
    return ['token' => $token->plainTextToken];
});

Route::post('users',function(Request $request, User $user){
    
    {
        
        $incomingFields = $request->validate([
            'name' => ['required', 'min:2', 'max:10', Rule::unique('users', 'name'), 'alpha'],
            'lName' => ['required', 'min:2', 'max:10', Rule::unique('users', 'lName'), 'alpha'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'min:8', 'max:200'],

        ]);


        $incomingFields['password'] = bcrypt($incomingFields['password']);

        $user = User::create($incomingFields);
        
        auth()->login($user);

        return redirect('http://192.168.1.111:3000/signin');
    }
});