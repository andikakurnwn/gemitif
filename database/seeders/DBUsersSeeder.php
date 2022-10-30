<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DBUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name'    => 'Andika',
            'last_name'     => 'Kurniawan',
            'email'         => 'andikakurnwn@gmail.com',
            'password'      => bcrypt('password'),
        ]);
    }
}
