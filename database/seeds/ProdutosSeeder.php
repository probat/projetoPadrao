<?php

use Illuminate\Database\Seeder;

class ProdutosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('produtos')->insert(['nome' => 'Adidas', 'estoque' => 1, 'preco' => 100, 'categoria_id' => '1']);
        DB::table('produtos')->insert(['nome' => 'Puma', 'estoque' => 1, 'preco' => 100, 'categoria_id' => '1']);
        DB::table('produtos')->insert(['nome' => 'Nike', 'estoque' => 1, 'preco' => 100, 'categoria_id' => '1']);
    }
}
