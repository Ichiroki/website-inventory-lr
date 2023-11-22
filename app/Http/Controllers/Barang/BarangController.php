<?php

namespace App\Http\Controllers\Barang;

use App\Http\Controllers\Controller;
use App\Models\Barang;
use Inertia\Inertia;

class BarangController extends Controller
{
    public function index() {
        $barangs = Barang::latest()->get();
        return Inertia::render('Barang/index', [
            'barangs' => $barangs
        ]);
    }
}
