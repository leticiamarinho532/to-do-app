import {default as request} from 'supertest';

import app from '../../src/app';
import knex from '../../src/database/connection';


describe('AUTH', () => {
    afterAll(async () => {
        await knex.destroy();
    });

    it('should be able to create a new user', async () => {
        const response = await request(app)
            .post('/user/create')
            .send({
                name: 'Teste',
                email: 'teste2@teste.com',
                password: '123456'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should be able to login with a user account', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'teste2@teste.com',
                password: '123456'
            });

        expect(response.body).toHaveProperty('token');
    });
});