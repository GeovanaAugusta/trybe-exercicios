"use strict";
// Agora vamos criar a estrutura do nosso arquivo de rotas para livros, voltaremos a esse arquivo a medida que formos desenvolvendo as funcionalidades do CRUD:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = require("../middlewares/books.middleware");
const router = (0, express_1.Router)();
const booksController = new books_controller_1.default();
const booksSlashId = '/books/:id';
router.get('/books', booksController.getAll);
// router.get('/books/:id', booksController.getById);
// router.post('/books/', validationBook, booksController.create);
// router.put('/books/:id', validationBook, booksController.update);
router.get(booksSlashId, booksController.getById);
router.post('/books/', books_middleware_1.validationBook, booksController.create);
router.put(booksSlashId, books_middleware_1.validationBook, booksController.update);
router.delete(booksSlashId, booksController.remove);
router.patch(booksSlashId, books_middleware_1.validatePartialBook, booksController.partialUpdate);
exports.default = router;
// Exercício: Considerando que para criação de endpoint nesse contexto, o processo consista em:
// Construir um método no modelo;
// Implementar o consumo do modelo no serviço;
// Implementar consumo do serviço no controlador;
// Associar validação (se for o caso) e o método do controlador ao endpoint do express.
// Construa um endpoint de método PATCH com endpoint no formato /books/:id, cuja função é alterar parcialmente o nosso recurso (no caso um livro).
