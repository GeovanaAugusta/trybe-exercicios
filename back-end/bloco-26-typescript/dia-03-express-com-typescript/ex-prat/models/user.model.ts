import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const result = await this.connection
      .execute('SELECT * FROM Users WHERE id=?', [id]);
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }

  public async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async update(id: number, user: User) {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
      [name, email, password, id]
    );
  }

  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM Users WHERE id=?',
      [id],
    );
  }
}

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