import { IBookModel } from "@/data/contracts/repositories/models/i-book-model";
import { Book } from "@/domain/entities/book";
import { IMapper } from "./i-mapper";

export class BookMapper implements IMapper {
    static toPersistency(bookEntity: Book): IBookModel {
        return {
            id: bookEntity.id,
            title: bookEntity.title,
            description: bookEntity.description,
            genre: bookEntity.genre,
        }
    }

    static toDomain(bookModel: IBookModel): Book {
        return new Book({
            id: bookModel.id,
            title: bookModel.title,
            description: bookModel.description,
            genre: bookModel.genre,
        });
    }
}