//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carol = 25;
let Murilo = 30;
let Baeta = 35;

 if (Carol < Murilo && Carol < Baeta) {
     console.log("Carol" + " é a mais nova")
 }
 else if (Murilo < Carol && Murilo < Baeta) {
    console.log("Murilo" + " é a mais nova")
}
else {
    console.log("Baeta" + " é a mais nova")
}

