import express from 'express';

import authMiddleware from "./middlewares/authMiddleware";
import AuthController from './controllers/AuthController';
import TodoController from './controllers/TodoController';

const authController = new AuthController();
const toDoController = new TodoController();

const routes = express.Router();

routes.post('/user/create', authController.create);
routes.post('/user/login', authController.login);
routes.post('/user/logout', authController.logout);


routes.post('/todo', authMiddleware, toDoController.create);
routes.put('/todo', authMiddleware, toDoController.update);
routes.get('/todo', authMiddleware, toDoController.index);
routes.delete('/todo', authMiddleware, toDoController.delete);

// routes.get('/teste', authMiddleware, (request, response) => {
//     console.log(request.userId);
//     response.json({ userId: request.userId });
// });

export default routes;