import { CreateBookService } from "@/data/services/create-book-service";
import { PrismaBookRepository } from "@/infra/prisma/implementations/prisma-book-repository";
import { CreateBookController } from "@/presentation/controllers/create-book-controller";

export function makeCreateBookController() {
    const bookRepository = new PrismaBookRepository();
    const createBookService = new CreateBookService(bookRepository);
    const createBookController = new CreateBookController(createBookService);

    return createBookController;
}