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
	echo "Criando Tabelas na base de Dados $1"
	php artisan migrate
	echo "Criando seeders"
	php artisan db:seed
	echo "Instalando npm"
	rm -rf node_modules
	npm install
	echo "Instalando Data Tables"
	npm install datatables.net
	npm install datatables.net-dt
	echo "Gerando arquivos de configuração node"
	npm run dev

fi

echo "# Done $1 Product #"