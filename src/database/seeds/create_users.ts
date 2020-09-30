import * as Knex from "knex";
import { uuid } from 'uuidv4';
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { id: uuid(),
            name: "Julia Lima",
            email: 'julia@teste.com',
            email_verified_at: 'NULL',
            password: bcrypt.hashSync('123456', 8),
            created_at: knex.fn.now()
        },
        { id: uuid(),
            name: "Renan Gomes",
            email: 'renan@teste.com',
            email_verified_at: 'NULL',
            password: bcrypt.hashSync('123456', 8),
            created_at: knex.fn.now()
        },
        { id: uuid(),
            name: "Paula Soares",
            email: 'paula@teste.com',
            email_verified_at: 'NULL',
            password: bcrypt.hashSync('123456', 8),
            created_at: knex.fn.now()
        }
    ]);
};
