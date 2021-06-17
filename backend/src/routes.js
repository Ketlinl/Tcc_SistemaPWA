const express = require('express');
const IncidentController = require('./controllers/IncidentController');
const LoginUserController = require('./controllers/LoginUserController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const routes = express.Router();

/*Login
*/
routes.post('/session', SessionController.create);
routes.post('/login', LoginUserController.create);

/*Lista tudo
*/
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', ProfileController.index);
routes.get('/users',UserController.index);
/*Criação
*/
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.post('/users',UserController.create);
/*Deletar
*/
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;