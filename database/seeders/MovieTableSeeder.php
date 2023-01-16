<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Movie Shark',
                'slug' => 'movie-shark',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=sTeoEFzVNSc',
                'thumbnail' =>
                    'https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg',
                'rating' => 9.5,
                'is_feature' => 1,
            ],
            [
                'name' => 'Deamon Dream',
                'slug' => 'demon-dream',
                'category' => 'Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=hCdokb0F9sc',
                'thumbnail' =>
                    'https://static-cse.canva.com/blob/951431/1600w-y9mFJemyO0E.jpg',
                'rating' => 8.5,
                'is_feature' => 0,
            ],
            [
                'name' => 'Dragon Dream',
                'slug' => 'dragon-dream',
                'category' => 'Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=Zcy-ND_4ydQ',
                'thumbnail' =>
                    'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg',
                'rating' => 8.5,
                'is_feature' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}
