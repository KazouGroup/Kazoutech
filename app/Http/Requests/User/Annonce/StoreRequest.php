<?php
namespace App\Http\Requests\User\Annonce;

class StoreRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->getRules('store');
    }

} // class
