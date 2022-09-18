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
const users_services_1 = __importDefault(require("../services/users.services"));
class UsersController {
    constructor(usersService = new users_services_1.default()) {
        this.usersService = usersService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.usersService.getById(id);
            if (!user) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND)
                    .json({ message: 'User not found!' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(user);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const userCreated = yield this.usersService.create(user);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(userCreated);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const user = req.body;
            yield this.usersService.update(id, user);
            // res.status(StatusCodes.NO_CONTENT).end();
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'User updated successfully' });
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.usersService.remove(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'User deleted successfully' });
        });
    }
}
exports.default = UsersController;
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
