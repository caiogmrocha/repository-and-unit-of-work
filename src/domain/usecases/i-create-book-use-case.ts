import { Book } from "@/domain/entities/book";

type ICreateBookUseCaseParamsGenres = 'romance' | 'horror' | 'adventure';

export type ICreateBookUseCaseParams = {
    title: string;
    description: string;
    genre: ICreateBookUseCaseParamsGenres;
}

export interface ICreateBookUseCase {
    execute(params: ICreateBookUseCaseParams): Promise<Book>;
}