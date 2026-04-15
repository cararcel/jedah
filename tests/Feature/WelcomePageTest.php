<?php

use Inertia\Testing\AssertableInertia as Assert;

test('home page renders the jedah main component', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('jedah-main'),
        );
});

test('english course page renders the english course component', function () {
    $this->get(route('english-course'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('english-course'),
        );
});
