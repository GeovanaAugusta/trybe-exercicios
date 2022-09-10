"use strict";
// Exercício 1: Crie uma classe Car cujo objeto representará um carro.
Object.defineProperty(exports, "__esModule", { value: true });
// Propriedades:
// Deve conter uma propriedade do tipo string chamada brand que representa a marca.
// Deve conter uma propriedade do tipo enum chamada color que representa a cor.
// A cor pode ser: preta, branca, vermelha ou prata.
// Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
// Comportamentos:
// Deve possuir um método chamado honk que aciona a buzina do carro.
// Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
// Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
// Deve possuir um método chamado turnOn que liga o carro.
// Deve possuir um método chamado turnOff que desliga o carro.
// Deve possuir um método chamado speedUp que acelera o carro.
// Deve possuir um método chamado speedDown que reduz a velocidade do carro.
// Deve possuir um método chamado stop que para o carro.
// Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.
var Colors;
(function (Colors) {
    Colors["Black"] = "preta";
    Colors["White"] = "branca";
    Colors["Red"] = "vermelha";
    Colors["Silver"] = "prata";
})(Colors || (Colors = {}));
var Door;
(function (Door) {
    Door["DRIVER"] = "da pessoa motorista";
    Door["RIDE"] = "da pessoa carona";
    Door["BEHIND_DRIVER"] = "de tr\u00E1s da pessoa motorista";
    Door["BEHIND_RIDE"] = "de tr\u00E1s da pessoa carona";
})(Door || (Door = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "esquerda";
    Directions["RIGHT"] = "direita";
})(Directions || (Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    turnOn() {
        console.log("Carro ligado.");
    }
    turnOff() {
        console.log("Carro desligado.");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
    speedUp() {
        console.log("Acelerando o carro.");
    }
    speedDown() {
        console.log("Reduzindo a velocidade do carro.");
    }
    stop() {
        console.log("Parando o carro.");
    }
    honk() {
        console.log("Buzinando: BIP BIP");
    }
    openTheDoor(door) {
        console.log(`Abrindo a porta ${door}.`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a porta ${door}.`);
    }
}
const example = new Car("volks", Colors.Black, 4);
console.log(example);
exports.default = Car;
