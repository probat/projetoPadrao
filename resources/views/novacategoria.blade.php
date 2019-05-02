@extends(
	'form-view', 
	[
		"current"     => "categorias",
		"title"       => "Página de Categorias",
		"headerTitle" => "Cadastro de Categorias",
		"actionForm"  => "/categorias",
		"id"          => "/"
	]
)

@section('form-view')
@csrf
<div class="form-group">
	<div class="col-sm-6">
		<label for="nomeCategoria"></label>
		<input type="text" class="form-control  {{$errors->has('nomeCategoria') ? 'is-invalid' : ''}}" name="nomeCategoria" id="nomeCategoria" placeholder="Categoria">
@if ($errors->has('nomeCategoria'))
		<div class="invalid-feedback">
	{{$errors->first('nomeCategoria')}}
		</div>
@endif
	</div>
</div>
@endsection