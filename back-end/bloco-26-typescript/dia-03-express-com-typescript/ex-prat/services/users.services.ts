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

import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import { NotFoundError } from 'restify-errors';

class UsersService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const users = await this.model.getById(id);
    return users;
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public async update(id: number, user: User): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, user);
  }

  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    this.model.remove(id);
  }
}

export default UsersService;