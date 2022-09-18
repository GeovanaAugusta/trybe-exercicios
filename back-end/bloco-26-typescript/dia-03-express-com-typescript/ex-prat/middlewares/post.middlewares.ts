import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Post from '../interfaces/post.interface';

const properties = ['title', 'author', 'category', 'publicationDate'];

function validateProperties(post: Post): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(post, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(post: Post): [boolean, string | null] {
  const entries = Object.entries(post);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}


function validationPost(req: Request, res: Response, next: NextFunction) {
  const post: Post = req.body;
  console.log(post);
  

  let [valid, property] = validateProperties(post);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(post);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  if(post.author.length < 3) return res.status(StatusCodes.BAD_REQUEST).send('O nome do autor deve ter no mínimo 3 caracteres'); 
  if(post.category.length < 3) return res.status(StatusCodes.BAD_REQUEST).send('O nome da categoria deve ter no mínimo 3 caracteres'); 

  const reg = /^\d{4}-\d{2}-\d{2}$/;
  if (!reg.test(post.publicationDate) || (new Date(post.publicationDate)).toString() === 'Invalid Date') {
    return res.status(StatusCodes.BAD_REQUEST).send('Formato de data inválido, deve ser no formato \'yyyy-mm-dd\''); 
  }

  next();
}

export default validationPost;

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