<?php

Route::group(['namespace' => 'Admin','middleware' => 'auth:web'], function(){

    Route::group(['middleware' => 'verified'],function (){

        Route::get(
            '/dashboard',
            'AdminController@index'
        )->name('dashboard.index');

        /* Admin */
        require(__DIR__ . DIRECTORY_SEPARATOR . 'administrators.php');

        require(__DIR__ . DIRECTORY_SEPARATOR . 'account.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'annonces.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'blog.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'faqs.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'faqsoccupation.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'users.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'roles.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'occupations.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'category_occupations.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'permissions.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'laravel-auditing.php');


        /** C'est route son dans la cartella page */
        require(__DIR__ . DIRECTORY_SEPARATOR . 'page'. DIRECTORY_SEPARATOR . 'abouts.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'page'. DIRECTORY_SEPARATOR . 'testimonials.php');

        /** C'est route son dans la cartella partial */
        require(__DIR__ . DIRECTORY_SEPARATOR . 'partial'. DIRECTORY_SEPARATOR . 'index.php');

        /** C'est route son dans la cartella slide */
        require(__DIR__ . DIRECTORY_SEPARATOR . 'slide'. DIRECTORY_SEPARATOR . 'all_slides.php');


        /** C'est route son dans la cartella info */
        require(__DIR__ . DIRECTORY_SEPARATOR . 'info'. DIRECTORY_SEPARATOR . 'legal_notice.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'info'. DIRECTORY_SEPARATOR . 'conditions.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'info'. DIRECTORY_SEPARATOR . 'documentation.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'info'. DIRECTORY_SEPARATOR . 'licence_site.php');
        require(__DIR__ . DIRECTORY_SEPARATOR . 'info'. DIRECTORY_SEPARATOR . 'policy_privacy.php');

    });

});
