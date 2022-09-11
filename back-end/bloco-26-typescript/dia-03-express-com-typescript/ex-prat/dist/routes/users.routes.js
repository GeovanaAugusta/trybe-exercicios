"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const user_middlewares_1 = __importDefault(require("../middlewares/user.middlewares"));
const router = (0, express_1.Router)();
const userController = new users_controller_1.default();
const usersSlashId = '/users/:id';
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', user_middlewares_1.default, userController.create);
router.put(usersSlashId, user_middlewares_1.default, userController.update);
router.delete(usersSlashId, userController.remove);
exports.default = router;
// Atividade 1 🚀
// Objetivos:
// Criar um CRUD completo de pessoas usuárias de uma aplicação.
// Permitir que pessoas usuárias dessa aplicação façam login utilizando suas credenciais.
// Utilize a tabela Users para realizar a atividade.
// Rotas:
// Uma rota que lista todos as pessoas usuárias da aplicação;
// Uma rota que lista uma única pessoa usuária a partir de seu id;
// Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;
// Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu id;
// Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu id.
// Regras:
// Uma pessoa usuária da aplicação deve possuir as propriedades id, nome, email e senha;
// Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;
// O id deve ser gerado automaticamente;
// A senha deve possuir no mínimo 6 e no máximo 12 caracteres;
// O nome deve possuir pelo menos 3 caracteres;
// O email deve possuir um formato de email válido (email@email.com);
// Ao criar um novo user, o email não pode já estar cadastrado.
// Agora vamos criar a estrutura do nosso arquivo de rotas para livros, voltaremos a esse arquivo a medida que formos desenvolvendo as funcionalidades do CRUD:
