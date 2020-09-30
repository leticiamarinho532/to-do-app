import {default as request} from "supertest";
import app from "../../src/app";

class Token
{
     async index() {
         const response = await request(app)
             .post('/auth/login')
             .send({
                 email: 'leticia@teste.com',
                 password: '123456'
             });

         const token = response.body.token;

         return token;
     }
}

export default Token;
