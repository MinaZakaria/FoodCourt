# FoodCourt
the angular project exists in the public folder of laravel project.

installation :
==============
$ git clone {the repo link}
+ inside laravel project:
$ composer install 
+ inside angular project: 
$ npm install
$ cp .env.example .env then configure your db parameters in .env file
+ create db
$ php artisan migrate
$ php artisan db:seed
$ php artisan serve
+ open url of the index of angular project 

Liberaries used:
================
only I needed the +barryvdh/laravel-cors liberary to allow access the server 

