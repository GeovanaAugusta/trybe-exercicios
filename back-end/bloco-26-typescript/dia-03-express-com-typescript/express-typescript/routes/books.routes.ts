// Agora vamos criar a estrutura do nosso arquivo de rotas para livros, voltaremos a esse arquivo a medida que formos desenvolvendo as funcionalidades do CRUD:


import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import {
  validationBook,
  validatePartialBook
} from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
// router.get('/books/:id', booksController.getById);
// router.post('/books/', validationBook, booksController.create);
// router.put('/books/:id', validationBook, booksController.update);
router.get(booksSlashId, booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);
router.patch(booksSlashId, validatePartialBook, booksController.partialUpdate);

export default router;

// Exercício: Considerando que para criação de endpoint nesse contexto, o processo consista em:

// Construir um método no modelo;
// Implementar o consumo do modelo no serviço;
// Implementar consumo do serviço no controlador;
// Associar validação (se for o caso) e o método do controlador ao endpoint do express.
// Construa um endpoint de método PATCH com endpoint no formato /books/:id, cuja função é alterar parcialmente o nosso recurso (no caso um livro).