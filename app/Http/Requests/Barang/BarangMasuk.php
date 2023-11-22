<?php

namespace App\Http\Requests\Barang;

use Illuminate\Foundation\Http\FormRequest;

class BarangMasuk extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'no_barang' => "required|string|exists:barangs,no_barang",
            'name' => "required|string",
            'stocks' => "required|integer|min:1"
        ];
    }

    public function messages()
    {
        return [
            'stocks.min' => "Minimum number for stocks is 1"
        ];
    }
}
