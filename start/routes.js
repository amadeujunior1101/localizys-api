'use strict'

const { RouteGroup } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('login', 'User/UserController.login')
Route.post('user', 'User/UserController.store').validator('StoreUser')

Route.group(() => {

  // Route.get('/', () => {
  //   return { greeting: 'Hello world in JSON' }
  // })
  
  Route.post('client', 'Client/ClientController.store').validator('StoreClient')
  Route.get('clients', 'Client/ClientController.show')
  Route.get('client_by_id', 'Client/ClientController.index')

  Route.post('visit', 'Schedule/VisitController.store').validator('StoreVisit')
  Route.post('visit-made', 'Schedule/VisitController.update')
  Route.get('visit_by_user_id', 'Schedule/VisitController.show')
  Route.get('visit_all_client', 'Schedule/VisitController.showAllVisitByClient')
}).middleware(['auth:jwt']);

