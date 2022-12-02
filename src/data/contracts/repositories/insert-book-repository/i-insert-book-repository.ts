import { IBookModel } from "../models/i-book-model";

export interface IInsertBookRepository {
    insert(data: Omit<IBookModel, 'id'>): Promise<IBookModel>;
}