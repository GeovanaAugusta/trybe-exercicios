"use strict";
// Atividade 1 🚀
// Objetivos:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const connection_1 = __importDefault(require("../models/connection"));
const user_model_1 = __importDefault(require("../models/user.model"));
const restify_errors_1 = require("restify-errors");
class UsersService {
    constructor() {
        this.model = new user_model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getById(id);
            return users;
        });
    }
    create(user) {
        return this.model.create(user);
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            return this.model.update(id, user);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.model.getById(id);
            if (!userFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            this.model.remove(id);
        });
    }
}
exports.default = UsersService;
