<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:movies,name,' . $this->movie->id,
            'category' => 'required',
            'video_url' => 'required|url',
            'thumbnail' => 'sometimes|image',
            'rating' => 'required|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
