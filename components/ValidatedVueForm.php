<?php namespace Pixiu\Boilerplate\Components;

use Cms\Classes\ComponentBase;

use ValidationException;
use Validator;

class ValidatedVueForm extends ComponentBase
{

    public function componentDetails()
    {
        return [
            'name'        => 'Validated Vue form',
            'description' => 'Validate simple form with AJAX'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {
        $this->addJs('https://unpkg.com/vue/dist/vue.js');
        $this->addJs('assets/js/default.vue.js');
    }

    public function onValidate()
    {
        $validation = Validator::make(
            post(),
            ['first_name' => 'required']
        );

        if ($validation->fails()) {
            throw new ValidationException($validation);
        }
    }

}
