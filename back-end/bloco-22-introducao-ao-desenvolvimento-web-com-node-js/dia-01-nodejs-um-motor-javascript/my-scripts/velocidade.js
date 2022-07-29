// 6 Crie um script para calcular a velocidade média de um carro numa corrida.
// A fórmula para calcular velocidade média é distância / tempo.
// Armazene o script no arquivo velocidade.js.
// Agora, permita que o script seja executado através do comando npm run velocidade. Para isso, crie a chave velocidade dentro do objeto scripts no package.json.
// Utilize o readline-sync para solicitar os dados à pessoa.
// Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.

const readline = require('readline-sync');

const mediaVelocity = (d, t) => {
  const velocity = d/t;
  return velocity.toFixed(2);
} 

function main() {
  const d = readline.questionInt('Qual a distância percorrida? (em m)');
  const t = readline.questionInt('Qual o tempo gasto para percorrer a distância? (em s)');
  const velocity = mediaVelocity(d, t);

     console.log(`A velocidade média é: ${mediaVelocity(d, t)} m/s`);    
    }
  
    main();