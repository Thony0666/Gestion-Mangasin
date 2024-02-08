<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Livraison extends Model
{
    use HasFactory;

    protected $fillable = [
        'delivery_date',
        'delivery_address',
    ];


    public function deliveryDetails(): HasMany
    {
        return $this->hasMany(DeliveryDetail::class);
    }
}
