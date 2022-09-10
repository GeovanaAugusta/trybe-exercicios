"use strict";
// Exercício 1: Crie uma classe Car cujo objeto representará um carro.
exports.__esModule = true;
exports.Car = exports.Directions = exports.Door = exports.Colors = void 0;
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
// import Colors from "./Colors";
// import Directions from "./Directions";
// import Doors from "./Doors";
var Colors;
(function (Colors) {
    Colors["Black"] = "preta";
    Colors["White"] = "branca";
    Colors["Red"] = "vermelha";
    Colors["Silver"] = "prata";
})(Colors = exports.Colors || (exports.Colors = {}));
var Door;
(function (Door) {
    Door["DRIVER"] = "da pessoa motorista";
    Door["RIDE"] = "da pessoa carona";
    Door["BEHIND_DRIVER"] = "de tr\u00E1s da pessoa motorista";
    Door["BEHIND_RIDE"] = "de tr\u00E1s da pessoa carona";
})(Door = exports.Door || (exports.Door = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "esquerda";
    Directions["RIGHT"] = "direita";
})(Directions = exports.Directions || (exports.Directions = {}));
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.turnOn = function () {
        console.log("Carro ligado.");
    };
    Car.prototype.turnOff = function () {
        console.log("Carro desligado.");
    };
    Car.prototype.turn = function (direction) {
        console.log("Virando para a ".concat(direction, "."));
    };
    Car.prototype.speedUp = function () {
        console.log("Acelerando o carro.");
    };
    Car.prototype.speedDown = function () {
        console.log("Reduzindo a velocidade do carro.");
    };
    Car.prototype.stop = function () {
        console.log("Parando o carro.");
    };
    Car.prototype.honk = function () {
        console.log("Buzinando: BIP BIP");
    };
    Car.prototype.openTheDoor = function (door) {
        console.log("Abrindo a porta ".concat(door, "."));
    };
    Car.prototype.closeTheDoor = function (door) {
        console.log("Fechando a porta ".concat(door, "."));
    };
    return Car;
}());
exports.Car = Car;
var example = new Car("volks", Colors.Black, 4);
console.log(example);
exports["default"] = {
    Car: Car,
    Colors: Colors,
    Door: Door,
    Directions: Directions
};
