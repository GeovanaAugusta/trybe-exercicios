//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra"
let player2 = "tesoura"


    if (player1 ==  player2) {
        console.log("Empate")
    } else if (player1 == "pedra" && player2 == "tesoura") {
        console.log("player 1 wins")
    } else if (player1 == "tesoura" && player2 == "papel") {
        console.log("player 1 wins")
} else {
    console.log("player 2 wins")
}

// Tentar entender para familiarizar

// let jogo = Math.floor((Math.random() * 3) + 1);
// if(jogo === 1){
//     jogo = 'tesoura';
// } else if (jogo === 2){
//     jogo = 'pedra';
// } else {
//     jogo = 'papel';
// }
// let jogo2 = Math.floor((Math.random() * 3) + 1);
// if(jogo2 === 1){
//     jogo2 = 'tesoura';
// } else if (jogo2 === 2){
//     jogo2 = 'pedra';
// } else {
//     jogo2 = 'papel';
// }
// console.log('Jogador 1: ',jogo,' Jogador 2: ',jogo2);
// if (jogo === jogo2){
//     console.log('A Ties');
// } else if ((jogo === 'pedra' && jogo2 === 'tesoura') || (jogo === 'tesoura' && jogo2 === 'papel') ||
// (jogo === 'papel' && jogo2 === 'pedra')){
//     console.log('Player 1 won');
// } else {
//     console.log('Player 2 won');
