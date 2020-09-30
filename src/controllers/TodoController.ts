import { Request, Response } from 'express';
import { uuid } from 'uuidv4';
import knex from '../database/connection';

class TodoController
{
    async index(request: Request, response: Response) {
        const todos = await knex('todos').where({ user_id: request.userId })

        response.json({ todos: todos });
    }

    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const todo = {
            id: uuid(),
            title: title,
            description: description,
            flag: 1,
            user_id: request.userId
        }

        const insertTodo = await knex('todos').insert(todo);

        response.json({ todo });
    }

    // async update(request: Request, response: Response) {
    //     const { id, flag } = request.body;
    //
    //     const todo = await knex('todos').select('id','user_id').where({ id: id });
    //
    //     if (todo.user_id != request.userId) {
    //         return response.status(401).json({ message: 'Não autorizado' });
    //     }
    //
    //     await knex('todos').where({ id: id }).update({flag: 0});
    //
    //     response.json({ id, flag });
    // }
    //
    // async delete(request: Request, response: Response) {
    //     const { id } = request.body;
    //
    //     const todo = await knex('todos').select('id', 'user_id').where({ id: id });
    //
    //     if (todo.user_id != request.userId) {
    //         return response.status(401).json({ message: 'Não autorizado' });
    //     }
    //
    //     await knex('todos').where('id', id).delete();
    //
    //     return response.status(204).send();
    //
    // }
}

export default TodoController;