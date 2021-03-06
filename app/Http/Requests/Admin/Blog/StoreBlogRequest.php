<?php
namespace App\Http\Requests\Admin\Blog;

class StoreBlogRequest extends BaseRequest
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
