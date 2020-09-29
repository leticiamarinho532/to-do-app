const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('AUTH', () => {
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new user', async () => {
        const response = await request(app)
            .post('/auth/create')
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
            .post('/auth/login')
            .send({
                email: 'teste@teste.com',
                password: '123456'
            });

        expect(response.body).toHaveProperty('token');
    });

    it('should be able to logout', async () => {
        const requestToken = await request(app)
            .post('/auth/login')
            .send({
                email: 'teste@teste.com',
                password: '123456'
            });

        const token = requestToken.token;

        const response = await request(app)
            .set('Authorization', 'bearer ' + token)
            .post('/auth/logout');

       expect(response.status).toBe(200);

    });
});