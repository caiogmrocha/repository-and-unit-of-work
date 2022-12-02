import { CreateBookService } from '@/data/services/create-book-service';
import { Book } from '@/domain/entities/book';
import { PrismaBookRepository } from '@/infra/prisma/implementations/prisma-book-repository';

import { describe, expect, it } from 'vitest';

const makeSut = () => {
    const booksRepository = new PrismaBookRepository();
    const sut = new CreateBookService(booksRepository);

    return { sut };
}

describe('Create Book Service', () => {
    it('should be able to create a new book', async () => {
        const { sut } = makeSut();

        const result = await sut.execute({
            title: 'any_title',
            description: 'any_description',
            genre: 'romance',
        });

        expect(result).toBeInstanceOf(Book);
    })
})