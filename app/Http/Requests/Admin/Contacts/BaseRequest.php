<?php
namespace App\Http\Requests\Contacts;

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
                'first_name'    => 'required|max:100',
                'last_name'    => 'required|max:100',
                'email'   => 'required|email:rfc,dns',
                'subject' => 'required|min:2|max:210',
                'message'     => 'required|min:2|max:50000',
                //'recaptcha' => ['required', $recaptcha],
            ];
        }
        else { // 'edit'
            $rules = [
              //
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
            //
        ];
    }

    // --------------------------------------------------------------------------

    // --------------------------------------------------------------------------

} // class