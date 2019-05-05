# $1 parametro DataBaseName
echo "# Initializing $1 Product #"
if [ -z $1 ]; then
	echo "Favor informar Base de Dados"
else
	echo "Atualizando Composer"
	rm -rf vendor
	composer clear-cache
	composer update
	echo "Criando Base de Dados $1"
	php artisan mysql:createdb $1
	echo "Criando seeders"
	php artisan db:seed
fi

echo "# Done $1 Product #"