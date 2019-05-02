@extends(
	'grid', 
	[
		"current"       => "categorias",
		"title"         => "Página de Categorias",
		"headerTitle"   => "Cadastro de Categorias",
		"actionForm"    => "/categorias",
		"actionEdit"    => 
		[
			"href"   => "/categorias/editar/",
			"label"  => "Editar"
		],
		"actionCancel"    => 
		[
			"href"   => "/categorias/apagar/",
			"label"  => "Cancelar"
		],
		"id"            => "/",
		"event"         => "",
		"table"         => 
        [ 
            "id"   => ""
        ],
		"head"          => ['Código', 'Nome da Categoria', 'Ações'],
		"rows"          => $cats
	]
)
@section('grid')
@csrf

@endsection