import express from 'express';

import authMiddleware from "./middlewares/authMiddleware";
import AuthController from './controllers/AuthController';
// import TodoController from './controllers/TodoController';

const authController = new AuthController();

const routes = express.Router();

routes.post('/user/create', authController.create);
routes.post('/user/login', authController.login);
routes.post('/user/logout', authController.logout);


// routes.post('/todo', authMiddleware, TodoController.create);
// routes.put('/todo', authMiddleware, TodoController.update);
// routes.get('/todo', authMiddleware, TodoController.index);
// routes.delete('/todo', authMiddleware, TodoController.delete);

routes.get('/teste', authMiddleware, (request, response) => {
    console.log(request.userId);
    response.json({ userId: request.userId });
});

export default routes;