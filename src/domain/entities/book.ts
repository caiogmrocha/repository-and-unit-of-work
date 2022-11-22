type IBookPropsGenres = 'romance' | 'horror' | 'adventure';

export type IBookProps = {
    id: number;
    title: string;
    description: string;
    genre: IBookPropsGenres;
}

export class Book {
    private props: IBookProps;

    constructor (props: IBookProps) {
        if (!props.id) {
            props.id = Date.now();
        }

        this.props = props;
    }

    get id(): number {
        return this.props.id;
    }

    get title(): string {
        return this.props.title;
    }

    get description(): string {
        return this.props.description;
    }

    get genre(): IBookPropsGenres {
        return this.props.genre;
    }
}