# $1 parametro NomeEntidade/Controller
echo "# Initializing $1 MVC #"
if [ -z $1 ]; then
	echo "Favor informar Nome do Modelo"
else
	echo "Created Model $1"
	php artisan make:model Models/$1
	echo "Created Controller $1"
	php artisan make:controller $1Controller --resource --model=Models/$1
fi
echo "# Done $1 MVC #"