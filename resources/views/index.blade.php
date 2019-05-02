@extends('layout.app', ["current" => "home"])

@section('body')
<div class="jumbotron bg-light border border-secondary">
	<div class="row">
		<div class="card-deck">
			<div class="card border border-primary">
				<div class="card-body">
					<h5 class="card-title">Cadastro de Produtos</h5>
					<p class="card-text">
						Aqui voce cadastra todos os produtos
					</p>
					<a href="/produtos" class="btn btn-primary">Cadastre seus produtos</a>
				</div>
			</div>
			<div class="card border border-primary">
				<div class="card-body">
					<h5 class="card-title">Cadastro de Departamentos</h5>
					<p class="card-text">
						Aqui voce cadastyra todos os produtos
					</p>
					<a href="/categorias" class="btn btn-primary">Cadastre seus Departamentos</a>
				</div>
			</div>
		</div>
	</div>
</div>
	<h1>Hello Word</h1>
@endsection