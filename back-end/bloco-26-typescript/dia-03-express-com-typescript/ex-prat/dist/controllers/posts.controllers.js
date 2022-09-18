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
const http_status_codes_1 = require("http-status-codes");
const posts_services_1 = __importDefault(require("../services/posts.services"));
class PostsController {
    constructor(postsService = new posts_services_1.default()) {
        this.postsService = postsService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postsService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(posts);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const post = yield this.postsService.getById(id);
            if (!post) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: 'Post not found!' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(post);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const post = req.body;
            const postCreated = yield this.postsService.create(post);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(postCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const post = req.body;
            yield this.postsService.update(id, post);
            // res.status(StatusCodes.NO_CONTENT).end();
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Post updated successfully' });
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.postsService.remove(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Post deleted successfully' });
        });
    }
}
exports.default = PostsController;
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
