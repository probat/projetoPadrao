<?php

use Illuminate\Database\Seeder;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorias')->insert(['nome' => 'Calçados']);
        DB::table('categorias')->insert(['nome' => 'Roupa']);
        DB::table('categorias')->insert(['nome' => 'Eletroeletrônicos']);
        DB::table('categorias')->insert(['nome' => 'Materiais de Construção']);
        DB::table('categorias')->insert(['nome' => 'Vinhos']);
        DB::table('categorias')->insert(['nome' => 'Queijos']);
        DB::table('categorias')->insert(['nome' => 'Livros']);
        DB::table('categorias')->insert(['nome' => 'Padaria']);
        DB::table('categorias')->insert(['nome' => 'Escolar']);
    }
}
