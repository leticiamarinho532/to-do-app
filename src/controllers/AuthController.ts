import {Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import { uuid } from 'uuidv4';
import knex from '../database/connection';

class AuthController
{
    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userExist = await knex('users').select('email').where({ email: email});

        if (userExist) {
            return response.status(409).json({ message: 'Usuário já existente'});
        }

        const [id] = await knex('users').insert({
            id: uuid(),
            name: name,
            email: email,
            password: password
        });

        return response.json({ id });
    }

    async login(request: Request, response: Response) {

    }

    async logout(request: Request, response: Response) {

    }
}

export default AuthController;