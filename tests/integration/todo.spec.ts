import {default as request} from 'supertest';

import app from '../../src/app';
import Token from '../mock/Token';
import connection from '../../src/database/connection';

const token = new Token();

describe('TODO', () => {

    beforeAll(async () => {
        await connection.seed.run();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new to-do', async () => {

        // const response = await request(app)
        //     .post('/todo')
        //     .set('Authorization', token.index())
        //     .send({
        //         title: 'Titulo teste',
        //         description: 'descrição teste'
        //     });
        //
        // expect(response.body).toHaveProperty('id');

    });

    // it('should be able to update the flag from undone to done', async () => {
    //     const response = await request(app)
    //         .put('/todo')
    //         .set('Authorization', token.index())
    //         .send({
    //             flag: 0
    //         });
    //
    //     expect(response.body).toHaveProperty('id');
    //     expect(response.body.flag).toMatch(/0/);
    //
    // });
    //
    // it('should be able to list all to-do', async () => {
    //     const response = await request(app)
    //         .get('/todo')
    //         .set('Authorization', token.index());
    //
    //     expect(response.body).toEqual(
    //         expect.arrayContaining(
    //             expect.objectContaining({
    //                 title: expect.any(String),
    //                 description: expect.any(String),
    //                 flag: expect.any(Boolean)
    //             })
    //         )
    //     );
    //
    // });
    //
    // it('should be able to delete one to-do', async () => {
    //     const responseAdd = await request(app)
    //     .post('/todo')
    //         .set('Authorization', token.index())
    //     .send({
    //         title: 'Titulo teste',
    //         description: 'descrição teste'
    //     });
    //
    //     const responseDelete = await request(app)
    //     .delete('/')
    //         .set('Authorization', token.index())
    //     .send({
    //         id: responseAdd.body.id
    //     })
    //
    //     expect(responseDelete.status).toBe(204);
    // });
});