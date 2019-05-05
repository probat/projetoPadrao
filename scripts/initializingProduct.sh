# $1 parametro teste
echo "# Initializing $1 Product #"
rm -rf vendor
composer clear-cache
composer update
php artisan make:migrate
php artisan db:seed
echo "# Done $1 Product #"