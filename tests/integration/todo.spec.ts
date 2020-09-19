const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('TODO', () => {

    it('should be able to create a new to-do', async () => {
        const response = await request(app)
            .post('/')
            .send({
                title: 'Titulo teste',
                description: 'descrição teste'
            });

        expect(response.body).toHaveProperty('id');

    });

    it('should be able to update the flag from undone to done', async () => {
        const response = await request(app)
            .put('/')
            .send({
                flag: 0
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.flag).toMatch(/0/);

    });

    it('sould be able to list all to-do', async () => {
        const response = await request(app)
        .get('/');

        expect(response.body).toEqual(
            expect.arrayContaining(
                expect.objectContaining({
                    title: expect.any(String),
                    description: expect.any(String),
                    flag: expect.any(Boolean)
                })
            )
        );

    } );

    it('should be able to delete one to-do', async () => {
        const responseAdd = await request(app)
        .post('/')
        .send({
            title: 'Titulo teste',
            description: 'descrição teste'
        });

        const responseDelete = await request(app)
        .delete('/')
        .send({
            id: responseAdd.id
        })

        expect(responseDelete.status).toBe(204);
    })
})