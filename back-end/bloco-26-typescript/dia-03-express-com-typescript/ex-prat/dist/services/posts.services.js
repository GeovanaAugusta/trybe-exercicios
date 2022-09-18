"use strict";
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
const connection_1 = __importDefault(require("../models/connection"));
const post_model_1 = __importDefault(require("../models/post.model"));
const restify_errors_1 = require("restify-errors");
class postService {
    constructor() {
        this.model = new post_model_1.default(connection_1.default);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.model.getAll();
            return post;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.model.getById(id);
            return post;
        });
    }
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.model.create(post);
            return posts;
        });
    }
    update(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postFound = yield this.model.getById(id);
            if (!postFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            return this.model.update(id, post);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postFound = yield this.model.getById(id);
            if (!postFound) {
                throw new restify_errors_1.NotFoundError('NotFoundError');
            }
            this.model.remove(id);
        });
    }
}
exports.default = postService;
// Atividade 2 🚀
// Objetivos:
// Criar um CRUD completo de Blog Posts.
// Listar posts por autor, categoria ou data de criação.
// Utilize a tabela Posts para realizar a atividade.
// Rotas:
// Uma rota que lista todos os posts;
// Uma rota que lista um único post por meio de seu id;
// Uma rota que permite cadastrar um novo post;
// Uma rota que permite editar o registro de um post cadastrado a partir de seu id;
// Uma rota que permite deletar um post a partir de seu id.
// Uma rota que recebe via query params o autor, a categoria ou a data de criação e lista todos os posts que se encaixem no filtro;
// Regras:
// Um post deve possuir as propriedades id, título, nome do autor, nome da categoria e data de criação;
// Nenhuma propriedade de um post pode ser nula ou vazia;
// O nome do autor deve possuir pelo menos 3 caracteres;
// O nome da categoria deve possuir pelo menos 3 caracteres;
// A query param de data de criação deve ser no formato: aaaa-mm-dd;
