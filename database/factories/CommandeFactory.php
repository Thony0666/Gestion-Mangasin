<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CommandeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = $this->faker->randomElement(['Billet', 'Paid', 'Cancel']);
        return [
            'date_commande' => $this->faker->dateTimeThisDecade(),
            'status' => $status,
        ];
    }
}
