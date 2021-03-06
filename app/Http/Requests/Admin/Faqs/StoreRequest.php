<?php

namespace App\Http\Requests\Admin\Faqs;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends BaseRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'title'=>'required',
            'body'=>'required',
            'categoryfaq_id'=>'required',
        ];
    }
    public function messages()
    {
        return [
            'categoryfaq_id.required' => 'Le champ categorie est obligatoire',
        ];
    }
    /**
     *  Filters to be applied to the input.
     *
     * @return array
     */
    public function filters()
    {
        return [
            //'email' => 'trim|lowercase',
            //'name' => 'trim|capitalize|escape'
        ];
    }
}
