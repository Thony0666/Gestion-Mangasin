<?php

use App\Models\Article;
use App\Models\Commande;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ligne_commande', function (Blueprint $table) {
            $table->id();
            $table->integer('selling_price')->default(0);
            $table->integer('quantity')->unsigned();
            $table->foreignIdFor(commande::class)->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignIdFor(Article::class)->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ligne_commande', function (Blueprint $table) {
            $table->dropForeignIdFor(Commande::class);
            $table->dropForeignIdFor(Article::class);
        });
        Schema::dropIfExists('ligne_commande');
    }
};
