import { Pool, ResultSetHeader } from 'mysql2/promise';
import Post from '../interfaces/post.interface';

export default class PostModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Post[]> {
    const result = await this.connection
      .execute('SELECT * FROM Posts');
    const [rows] = result;
    return rows as Post[];
  }

  public async getById(id: number): Promise<Post> {
    const result = await this.connection
      .execute('SELECT * FROM Posts WHERE id=?', [id]);
    const [rows] = result;
    const [post] = rows as Post[];
    return post;
  }

  public async create(post: Post): Promise<Post> {
    const { title, author, category, publicationDate } = post;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)',
      [title, author, category, publicationDate],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...post };
  }

  public async update(id: number, post: Post) {
    const { title, author, category, publicationDate } = post;
    await this.connection.execute(
      'UPDATE Posts SET title=?, author=?, category=?, publicationDate=? WHERE id=?',
      [title, author, category, publicationDate, id]
    );
  }

  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM Posts WHERE id=?',
      [id],
    );
  }
}

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