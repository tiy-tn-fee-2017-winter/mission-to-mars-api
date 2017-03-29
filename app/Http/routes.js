'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.resource('/missions', 'MissionController').except(['create', 'edit']);
Route.resource('/crews', 'CrewController').except(['create', 'edit']);
Route.resource('/fuels', 'FuelController').except(['create', 'edit']);
