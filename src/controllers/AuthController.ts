import {Request, Response} from 'express';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { uuid } from 'uuidv4';
import knex from '../database/connection';

class AuthController
{
    async create(request: Request, response: Response) {
        let { name, email, password } = request.body;

        const userExist = await knex('users').select('email').where({ email: email});

        if (userExist.length > 0) {
            return response.status(409).json({ message: 'Usuário já existente'});
        }

        password = bcrypt.hashSync(password, 8);

        const [id] = await knex('users')
            .returning('id')
            .insert({
                id: uuid(),
                name: name,
                email: email,
                password: password
            });

        return response.json({ id });
    }

    async login(request: Request, response: Response) {
        const { email, password } = request.body;

        const user =  await knex('users').where({ email: email }).first();

        if (user.length === 0) {
            return response.status(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return response.status(401);
        }

        const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1d'});

        return response.json({ id: user.id, token: token });

    }

    async logout(request: Request, response: Response) {

    }
}

export default AuthController;