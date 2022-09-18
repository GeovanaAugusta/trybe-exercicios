import connection from '../models/connection';
import postModel from '../models/post.model';
import Post from '../interfaces/post.interface';
import { NotFoundError } from 'restify-errors';

class postService {
  public model: postModel;

  constructor() {
    this.model = new postModel(connection);
  }

  public async getAll(): Promise<Post[]> {
    const post = await this.model.getAll();
    return post;
  }

  public async getById(id: number): Promise<Post> {
    const post = await this.model.getById(id);
    return post;
  }

  public async create(post: Post): Promise<Post> {
    const posts = await this.model.create(post);
    return posts;
  }

  public async update(id: number, post: Post): Promise<void> {
    const postFound = await this.model.getById(id);
    if (!postFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, post);
  }

  public async remove(id: number): Promise<void> {
    const postFound = await this.model.getById(id);
    if (!postFound) {
      throw new NotFoundError('NotFoundError');
    }

    this.model.remove(id);
  }
}

export default postService;

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