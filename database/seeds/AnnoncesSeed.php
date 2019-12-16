<?php

use App\Model\admin\annonce;
use App\Model\admin\categoryoccupation;
use App\Model\admin\occupation;
use App\Model\user\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class AnnoncesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->addInfoDatable();
    }


    public function addInfoDatable()
    {
        factory(annonce::class, 300)->create();
    }
}