// models/Author.js

 const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({id, firstName, middleName, lastName}) => {

  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
    const fullName = [firstName, middleName, lastName]
      .filter(Boolean)
      .join(' ');
  
    return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
    };
  };
  
  // Converte o nome dos campos de snake_case para camelCase
  const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});
  
  // Busca todos os autores do banco.
   const getAll = async () => {
   	const [authors] = await connection.execute(
   		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
   	);
        return authors.map(serialize).map(getNewAuthor);
   };
  
   module.exports = {
   	getAll,
   };

// Agora, podemos de fato começar a escrever nossa aplicação. A primeira coisa que faremos é criar uma rota que retornará uma lista com os nomes de todas as pessoas autoras. Queremos também que seja exibido o nome completo da pessoa escritora, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome.
// O model deverá expor alguma interface que seja capaz de buscar essa lista do banco de dados e retorná-la. Ele deverá se encarregar de todos os detalhes de baixo nível, como se conectar com o banco, montar e executar as queries necessárias para buscar e retornar os dados desejados. Ele também fará o mapeamento dos dados para um formato que seja mais adequado para o domínio da aplicação. Esse mapeamento pode envolver conversão de dados, renomear campos, esconder ou criar novos campos derivados dos dados existentes, por exemplo.

// O model Author exporta uma função getAll. Essa função retornará todas as pessoas autoras cadastradas no banco de dados. Utilizamos o método execute para fazer uma query mysql como já estamos acostumados. Esse método retorna uma Promise que, quando resolvida, nos fornece um array com 2 campos: [rows, fields]. O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.