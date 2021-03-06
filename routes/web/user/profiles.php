<?php
/**
 * Created by PhpStorm.
 * User: boclairtemgoua
 * Date: 2019-08-14
 * Time: 02:28
 */

Route::get(
    '/charbonneur/{username}',
    'ProfileController@profileView'
)->name('profile.view');

Route::get(
    '/user',
    'ProfileController@profileUser'
)->name('profileUser.view');

Route::get(
    'profiles/u/{id}',
    'ProfileController@show'
)->name('profiles.show');

Route::put(
    'profiles/{profile}',
    'ProfileController@update');

Route::get(
    'dashboard/myprofile/p/{profile}/edit',
    'ProfileController@edit'
)->name('admin.profiles_edit');

Route::get(
    '/profiles/change_status_online/{id}',
    'ProfileController@statusOnline');

Route::get(
    '/profile/edit/',
    'ProfileController@profileEdit'
)->name('profile.edit');

Route::put(
    'profile/update_charbonneur/',
    'ProfileController@devenir_charbonneur_update_register'
)->name('devenir_charbonneur.update');
