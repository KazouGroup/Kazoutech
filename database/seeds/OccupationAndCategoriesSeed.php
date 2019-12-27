<?php

use App\Model\admin\annonce;
use App\Model\admin\blog;
use App\Model\admin\categoryoccupation;
use App\Model\admin\occupation;
use App\Model\user\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class OccupationAndCategoriesSeed extends Seeder
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
        $faker = Faker::create();
        $name = 'name';
        $description = $faker->realText(rand(100, 1000));
        $user =  user::inRandomOrder()->first()->id;
        $occupations = [
            [
                $name  => 'Electricité',
                'slug' =>str_slug('Electricité'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Méccanique',
                'slug' =>str_slug('Méccanique'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Soudure',
                'slug' =>str_slug('Soudure'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Maçonnerie',
                'slug' =>str_slug('Maçonnerie'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Menuiserie',
                'slug' =>str_slug('Menuiserie'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Charpenterie',
                'slug' =>str_slug('Charpenterie'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Menagerie',
                'slug' => str_slug('Menagerie'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Démenagement',
                'slug' =>str_slug('Démenagement'),
                'description' =>$description,
                'status' => true,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
            [
                $name  => 'Location Multiple',
                'slug' =>str_slug('Location Multiple'),
                'description' =>$description,
                'photo' => $faker->imageUrl($width = 1000, $height = 900),
                'user_id' => $user
            ],
        ];
        foreach($occupations as $item)
            occupation::create($item);

        factory(User::class, 10)->create();

        factory(categoryoccupation::class, 20)->create();

        factory(blog::class, 20)->create();
    }
}
