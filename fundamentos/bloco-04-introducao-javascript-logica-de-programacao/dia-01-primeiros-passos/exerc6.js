// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

const pecaXadrez = "peÃo";

switch (pecaXadrez.toLowerCase()) {
case "cavalo":
  console.log("Tem um movimento de L e captura no fim desse L, pode pular as peças intervenientes");
  break;

case "rei":
  console.log("Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance");
  break;

case "rainha":
  console.log("Seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor, é mais poderosa do jogo.");
  break;

case "peão":
  console.log("Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.")
break;

case "torre":
  console.log("Movimenta-se em direção reta pelas colunas ou fileiras.");
  break;

case "bispo":
  console.log("Movimenta-se em uma linha reta diagonalmente no tabuleiro, por quantas casas quiser, até encontrar o final do tabuleiro ou outra peça. Não pode pular outras peças e captura no mesmo caminho em que ele se move, parando na casa da peça adversária.");
  break;

// Se nenhuma das opções acima, erro.

default:
  console.log("Error")
break;
};