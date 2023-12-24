<?php

use App\Models\Post;
use Illuminate\Http\Request;
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
