import { IInsertBookRepository } from "@/data/contracts/repositories/insert-book-repository/i-insert-book-repository";
import { IBookModel, IBookModelGenres } from "@/data/contracts/repositories/models/i-book-model";
import { prismaClient } from "../client";

export class PrismaBookRepository implements IInsertBookRepository {
    async insert(data: Omit<IBookModel, "id">): Promise<IBookModel> {
        const prismaBookModel = await prismaClient.book.create({
            data,
        });

        return {
            id: prismaBookModel.id,
            title: prismaBookModel.title,
            description: prismaBookModel.description,
            genre: prismaBookModel.genre as IBookModelGenres,
        }
    }
}