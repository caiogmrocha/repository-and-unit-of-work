import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeCreateBookController } from '../factories/make-create-book-controller';

const booksRouter = Router();

booksRouter.post('/', adaptRoute(makeCreateBookController()));

export { booksRouter };

