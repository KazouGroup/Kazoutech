<?php

namespace App\Providers;

use App\Model\user\User;
use Carbon\Carbon;
use Diplodocker\Services\Contracts\AuthorizationInterface;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Carbon::setLocale('fr');
        setlocale(LC_TIME,'fr_FR.utf8','fr');


        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
