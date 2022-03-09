// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(3, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });


// Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat , sendo:
// 1 - Um número até que ponto gostaríamos de testar, neste caso 3 ;
// 2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat , neste caso uma função para testar nossos números.
// Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso action(count) dentro da função repeat . Deste modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.
// Pense agora que gostaríamos de testar quais números são ímpares. 

  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;

//   Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções chamadas isEven e isOdd . Após isso, só alteramos o segundo parâmetro ao chamar a função repeat .


// Outro exemplo:

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

//   Veja que ao executar esse código, não recebemos um número aleatório. Isso aconteceu porque na quinta linha do script nós imprimimos apenas a escrita da função, como não realizamos sua execução, ela não seguiu os procedimentos para retornar um número aleatório. Para executarmos a função, teríamos que inserir () na frente do numberGenerator .