import express from 'express';

import AuthController from './controllers/AuthController';
// import TodoController from './controllers/TodoController';

const authController = new AuthController();

const routes = express.Router();

routes.post('/auth/create', authController.create);
routes.post('/login', authController.login);
routes.post('/logout', authController.logout);


// routes.post('/todo', TodoController.create);
// routes.put('/todo', TodoController.update);
// routes.get('/todo', TodoController.index);
// routes.delete('/todo', TodoController.delete);

export default routes;