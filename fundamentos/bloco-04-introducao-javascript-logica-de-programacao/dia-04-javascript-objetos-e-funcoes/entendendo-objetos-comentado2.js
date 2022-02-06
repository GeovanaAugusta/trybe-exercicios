// Objeto (usuario) que armazena um objeto dentro dele (infoPessoal), e outro objeto que está armazenado dentro desse (endereco).

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

// Maneiras distintas de acessar o conteúdo, seja usando objeto.propriedade.propriedade ou 

// objeto.objetoDentroDoObjeto ou  

// Usando objeto['propriedade']['propriedadeDesseOutroObjeto'] ou

// objeto['objetoDentroDoObjeto'].[propriedadeDesseOutroObjeto]

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque