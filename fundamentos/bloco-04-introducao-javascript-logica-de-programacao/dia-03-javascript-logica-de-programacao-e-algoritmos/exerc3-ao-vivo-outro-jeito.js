//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// Entendendo o math.floor(math.random()) que é uma função aleatória adequada para usar para todos os propósitos de números inteiros aleatórios.
// // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floorfunction;

// https://www.w3schools.com/js/js_random.asp 

// getRndInteger(min, max) { 
//     return Math.floor(Math.random() * (max - min) ) + min; }


let array = ["pedra", "papel", "tesoura"];
let player1 = array[Math.floor(Math.random()*array.length)]
let player2 = array[Math.floor(Math.random()*array.length)]
console.log(player1)
console.log(player2)

if (player1 ==  player2) {
    console.log("Empate")
} else if (player1 == "pedra" && player2 == "tesoura") {
    console.log("player 1 wins")
} else if (player1 == "tesoura" && player2 == "papel") {
    console.log("player 1 wins")
} else {
console.log("player 2 wins")
}

// if (player1 === "pedra") {
//     if (player2 === "pedra") {
//         console.log("Tie");
//     } else if (player2 === "papel") {
//         console.log("Player 2 won");
//         } else {
//             console.log("Player 1 won");
//         }
//     } else if (player1 === "papel") {
//         if (player2 === "pedra") {
//             console.log("Player 1 won");
//         } else if (player2 === "papel") {
//             console.log("Tie")
//         } else {
//             console.log("Player 2 won");
//         }
//     } else {
//         if (player2 === "pedra") {
//             console.log("Player 2 won");
//         } else if (player2 === "papel") {
//             console.log("Player 1 won");
//         } else {
//             console.log("Tie")
//         }
//     }
