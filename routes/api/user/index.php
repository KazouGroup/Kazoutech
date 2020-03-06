<?php
/**
 * Created by PhpStorm.
 * User: boclairtemgoua
 * Date: 2019-08-10
 * Time: 06:41
 */

Route::group(['namespace' => 'User'], function(){

    require(__DIR__ . DIRECTORY_SEPARATOR . 'multiples_route.php');

    require(__DIR__ . DIRECTORY_SEPARATOR . 'technicians.php');

    require(__DIR__ . DIRECTORY_SEPARATOR . 'contact.php');

    require(__DIR__ . DIRECTORY_SEPARATOR . 'profiles.php');

    require(__DIR__ . DIRECTORY_SEPARATOR . 'annonce.php');

    require(__DIR__ . DIRECTORY_SEPARATOR . 'subscribers.php');

});
