// Objeto que armazena outro objeto dentro dele (banco). 

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };

// Criar uma variável let que pegue um objeto dentro do objeto e armazene todas as info de forma a se tornar um array que deve ser considerado na hora de acessar.
    let infoDoBanco = 'banco';

// Acesso ao array criado deve ser nomeLetObjeto[nomeLetArray] para acesso à tudo. Para acesso a algo específico nomeLetObjeto[nomeLetArray]['nome da propriedade do objeto']

  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
// Existem n maneiras para o acesso às propriedades para o objeto, podendo ser:
// nomeLetObjeto.propriedade no primeiro caso
// nomeLetObjeto['propriedade'] no segundo caso

  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
// // Existem n maneiras para o acesso às propriedades de um objeto dentro de outro objeto, podendo ser:
// nomeLetObjeto.propriedadeDoOutroObjeto.propriedadeDentroDoOuytoObjeto
// nomeLetObjeto['propriedadeDoOutroObjeto']['propriedadeDentroDoOuytoObjeto']

  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

