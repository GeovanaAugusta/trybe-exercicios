import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PostsService from '../services/posts.services';

class PostsController {
  constructor(private postsService = new PostsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const posts = await this.postsService.getAll();
    res.status(StatusCodes.OK).json(posts);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = await this.postsService.getById(id);

    if (!post) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Post not found!'});
    }
    res.status(StatusCodes.OK).json(post);
  }

  public create = async (req: Request, res: Response) => {
    const post = req.body;

    const postCreated = await this.postsService.create(post);
    res.status(StatusCodes.CREATED).json(postCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = req.body;
    await this.postsService.update(id, post);

    // res.status(StatusCodes.NO_CONTENT).end();
    res.status(StatusCodes.OK).json({ message: 'Post updated successfully' });
  };

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.postsService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Post deleted successfully' });
  };
}

export default PostsController;

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