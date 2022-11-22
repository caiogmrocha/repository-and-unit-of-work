type IBookModelGenres = 'romance' | 'horror' | 'adventure';

export type IBookModel = {
    id: number;
    title: string;
    description: string;
    genre: IBookModelGenres;
}