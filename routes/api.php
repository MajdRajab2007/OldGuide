<?php

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
Route::get('posts', function () {
    return response(['Post 1', 'Post 2', 'Post 3'],200);
});
Route::get('posts/{post}', function ($postId) {
    return response()->json(['productId' => "{$postId}"], 200);
});
 
Route::post('posts', function() {
    return  response()->json([
            'message' => 'Create success'
        ], 201);
});
Route::put('posts/{post}', function() {
	return  response()->json([
            'message' => 'Update success'
        ], 200);
});
Route::delete('posts/{post}',function() {
	return  response()->json(null, 204);
});
