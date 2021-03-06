<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryoccupationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categoryoccupations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->text('subject')->nullable();
            $table->text('description')->nullable();
            $table->string('photo')->nullable();
            $table->string('link')->nullable();
            $table->string('slug')->nullable();
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('color_id')->nullable();
            $table->timestamps();

            $table->unsignedInteger('user_id')->nullable()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('occupation_id')->nullable()->index();
            $table->foreign('occupation_id')->references('id')->on('occupations')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_occupations');
    }
}
