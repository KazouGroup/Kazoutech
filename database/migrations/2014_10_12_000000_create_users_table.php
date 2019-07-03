<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            $table->string('username')->nullable()->unique();
            $table->string('name')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->nullable();
            $table->string('work')->nullable();
            $table->string('sex')->nullable();
            $table->string('age')->nullable();
            $table->string('color_name')->default('primary')->nullable();
            $table->string('phone')->nullable();
            $table->string('my_status')->nullable()->default('0');
            $table->longText('body')->nullable();
            $table->string('address')->nullable();
            $table->string('color_style')->nullable();
            $table->string('avatar')->nullable()->default('https://www.kazoucoin.com/assets/img/default-avatar.png');
            $table->string('avatarcover')->nullable()->default('https://www.kazoucoin.com/assets/img/photo.jpg');
            $table->string('ip')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->unsignedBigInteger('country_id')->nullable()->index();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
