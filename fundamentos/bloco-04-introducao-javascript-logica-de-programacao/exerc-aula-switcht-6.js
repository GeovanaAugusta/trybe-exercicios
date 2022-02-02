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