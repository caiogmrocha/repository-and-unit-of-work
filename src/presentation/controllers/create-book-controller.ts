import { ICreateBookUseCase } from "@/domain/usecases/i-create-book-use-case";
import { IController } from "../contracts/http/i-controller";
import { IHttpRequest } from "../contracts/http/i-http-request";
import { IHttpResponse, ok, serverError } from "../contracts/http/i-http-response";

export type ICreateBookControllerRequestGenres = 'romance' | 'adventure' | 'horror';

export type ICreateBookControllerRequest = {
    title: string;
    description: string;
    genre: ICreateBookControllerRequestGenres;
};

export type ICreateBookControllerResponse = {
    id: number;
    title: string;
    description: string;
    genre: 'romance' | 'adventure' | 'horror';
}

export class CreateBookController implements IController {
    constructor (
        private readonly createBookUseCase: ICreateBookUseCase,
    ) {}

    async handle(request: IHttpRequest<ICreateBookControllerRequest>): Promise<IHttpResponse<
        | ICreateBookControllerResponse
        | Error
    >> {
        try {
            const { body } = request;

            const response = await this.createBookUseCase.execute({
                title: body.title,
                description: body.description,
                genre: body.genre,
            });

            return ok({
                id: response.id,
                title: response.title,
                description: response.description,
                genre: response.genre,
            });
        } catch (error) {
            return serverError(new Error('Internal server error.'));
        }
    }
}