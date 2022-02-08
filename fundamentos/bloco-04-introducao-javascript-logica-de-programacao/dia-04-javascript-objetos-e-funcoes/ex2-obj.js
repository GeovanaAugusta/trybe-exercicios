      let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };

// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".


//Aqui existem novidades: Para imprimir entre aspas alguma informação do objeto usa '"' antes e após o acesso.
// A outra novidade é que para acessar um objeto2 que possui um array e está dentro de um objeto principal, usa-se objeto.objeto2[posição da info que quero acessar].nomeDoQueQueroAcessar

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"')

// Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

// Para inserir novo array, dentro de um array, usa o .push e cria-se um outro array com esses novos elementos.

leitor.livrosFavoritos.push( 
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',

},
);

  console.log(leitor)

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

//O .lenght atua no último array dentro do array que for adicionado, bastando apenas dizer objeto.nomeDoArrayPrincipal.length

console.log(leitor.nome + ' ' + 'tem ' + leitor.livrosFavoritos.length + ' livros favoritos') 



  