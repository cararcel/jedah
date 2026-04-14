<?php

use Inertia\Testing\AssertableInertia as Assert;

test('home page renders the jedah main component', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('jedah-main'),
        );
});
