import {default as request} from 'supertest';

import app from '../../src/app';
import knex from '../../src/database/connection';

describe('AUTH', () => {
    beforeEach(async() => {
        await knex.migrate.latest();
        await knex.seed.run();
    });

    afterAll(async () => {
        await knex.migrate.rollback();
        await knex.destroy();
    });

    it('should be able to create a new user', async () => {
        const response = await request(app)
            .post('/user/create')
            .send({
                name: 'Teste',
                email: 'teste@teste.com',
                password: '123456'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should be able to login with a user account', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'julia@teste.com',
                password: '123456'
            });

        expect(response.body).toHaveProperty('token');
    });
});