<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class LigneCommandeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'selling_price' => $this->faker->randomFloat(2, 0, 1000000),
            'quantity' => $this->faker->numberBetween(1, 100),
        ];
    }
}
