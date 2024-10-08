<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|max:255|unique:events,title',
            'slug' => 'unique:events,slug',
            'description' => 'required',
            'status' => ['required', Rule::in(['published', 'unpublished'])],
            'image' => 'nullable|image|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Il titolo è obbligatorio',
            'title.max' => 'Il titolo non può essere più lungo di 255 caratteri',
            'title.unique' => 'È già presente un evento con questo titolo',
            'description.required' => 'La descrizione è obbligatoria',
            'status.required' => 'Lo stato è obbligatorio',
            'status.in' => 'Lo stato deve essere pubblicato o non pubblicato',
            'image.image' => 'L\'immagine caricata non è un immagine',
            'image.max' => 'La dimensione massima dell\'immagine è di 2MB',
        ];
    }
}
