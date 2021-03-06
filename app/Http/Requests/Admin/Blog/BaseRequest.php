<?php
namespace App\Http\Requests\Admin\Blog;

use App\Http\Requests\Request;


class BaseRequest extends Request
{
    // --------------------------------------------------------------------------

    /**
     * Return the array of validation rules for the given group.
     *
     * @param string $group The group name: 'store' or 'update'.
     * @param object $partner The partner object or null if the group is 'store'.
     * @return array
     */
    protected function getRules($group)
    {
        if ($group == 'store') {
            $rules = [
                'title' => 'required|string|min:2|max:200',
                'photo' => 'required',
                'color_id' => 'required',
                'occupation_id' => 'required',
            ];
        }
        else { // 'edit'
            $rules = [
                'title' => 'required|string|min:2|max:200',
                'photo' => 'required',
                'color_id' => 'required',
                'occupation_id' => 'required',
            ];
        }

        return $rules;
    }
    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------

    /**
     * the attributes method replaces the :attribute placeholder on the validation messages
     * with given attribute names
     *
     * @return array
     */

    public function attributes()
    {
        return [
            'color_id' => 'couleur obligatoire',
            'occupation_id' => 'occupation obligatoire',
        ];
    }

    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------

} // class
