// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica.

let estadoProcesso = "aprovada";

switch (estadoProcesso) {
case "aprovada":
console.log("Parabéns, você foi aprovada!")
break;

case "reprovada":
console.log("Que pena, não foi dessa vez!")
break;

case "lista":
console.log("Aguarde, você está na lista de espera!")
break;

default: console.log("Não se aplica")
}