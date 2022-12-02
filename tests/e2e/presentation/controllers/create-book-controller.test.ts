import { ICreateBookControllerRequest, ICreateBookControllerRequestGenres } from "@/presentation/controllers/create-book-controller";

import { app } from "@/main/app";
import { faker } from '@faker-js/faker';
import { randomInt } from "crypto";
import request from 'supertest';
import { describe, expect, it } from "vitest";

describe('[E2E] Create Book Controller', () => {
    it('should return 200 if book has been created', async () => {
        const bookData: ICreateBookControllerRequest = {
            title: faker.random.word(),
            description: faker.random.words(),
            genre: [ "romance", "adventure", "horror" ][randomInt(3) - 1] as ICreateBookControllerRequestGenres,
        };

        const { body, status } = await request(app)
            .post('/books')
            .send(bookData);

        expect(status).toBe(200);
        expect(body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            description: expect.any(String),
            genre: expect.any(String),
        }));
    });
});