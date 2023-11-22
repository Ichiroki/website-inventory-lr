<?php

namespace Database\Seeders;

use App\Models\Barang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Barang::create([
            'no_barang' => "N_001",
            'nama' => "Kepiting",
            'stocks' => "100",
        ]);

        Barang::create([
            'no_barang' => "N_002",
            'nama' => "Rajungan",
            'stocks' => "100",
        ]);

        Barang::create([
            'no_barang' => "N_003",
            'nama' => "Lobster",
            'stocks' => "100",
        ]);

        Barang::create([
            'no_barang' => "N_004",
            'nama' => "Udang",
            'stocks' => "100",
        ]);
    }
}
