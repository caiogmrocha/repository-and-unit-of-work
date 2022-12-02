import { IInsertBookRepository } from "@/data/contracts/repositories/insert-book-repository/i-insert-book-repository";
import { Book } from "@/domain/entities/book";
import { BookMapper } from "@/utils/mappers/book-mapper";
import { ICreateBookUseCase, ICreateBookUseCaseParams } from "domain/usecases/i-create-book-use-case";

export class CreateBookService implements ICreateBookUseCase {
    constructor (
        private readonly insertBookRepository: IInsertBookRepository,
    ) {}

    async execute({ title, description, genre }: ICreateBookUseCaseParams): Promise<Book> {
        const bookModel = await this.insertBookRepository.insert({
            title,
            description,
            genre,
        });

        return BookMapper.toDomain(bookModel);
    }
}