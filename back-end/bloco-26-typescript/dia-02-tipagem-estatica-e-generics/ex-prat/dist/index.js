"use strict";
// Exercício 2: Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:
Object.defineProperty(exports, "__esModule", { value: true });
// Siga em frente;
// Em 600 metros vire a esquerda;
// Vire a esquerda;
// Em 200 metros na rotatória pegue a segunda saída a direita;
// Mantenha em frente pelos próximos 1,2 quilômetros;
// Em 300 metros vire a direita;
// Vire a direita;
// Em 400 metros você chegará ao seu destino;
// Você chegou ao seu destino.
// Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.
// Siga em frente;
// Em 300 metros vire a direita;
// Vire a direita;
// Mantenha em frente pelos próximos 2 quilômetros;
// Em 200 metros vire a esquerda;
// Vire a esquerda;
// Em 400 metros vire a direita;
// Vire a direita;
// Em 100 metros você chegará ao destino.
// Você chegou ao destino.
// A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.
// Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.
// ./index.ts
const classCar_1 = require("./classCar");
const gol = new classCar_1.Car("Volkswagen", classCar_1.Colors.Silver, 4);
gol.openTheDoor(classCar_1.Door.DRIVER);
gol.closeTheDoor(classCar_1.Door.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(classCar_1.Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(classCar_1.Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(classCar_1.Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(classCar_1.Door.BEHIND_RIDE);
gol.closeTheDoor(classCar_1.Door.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(classCar_1.Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(classCar_1.Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(classCar_1.Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(classCar_1.Door.BEHIND_RIDE);
gol.closeTheDoor(classCar_1.Door.BEHIND_RIDE);
gol.speedUp();
