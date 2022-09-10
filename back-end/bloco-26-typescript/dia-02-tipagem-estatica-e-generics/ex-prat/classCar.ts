// Exercício 1: Crie uma classe Car cujo objeto representará um carro.

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

 export enum Colors {
  Black = "preta",
  White = "branca",
  Red = "vermelha",
  Silver = "prata",
}


export enum Door {
  DRIVER = "da pessoa motorista",
  RIDE = "da pessoa carona",
  BEHIND_DRIVER = "de trás da pessoa motorista",
  BEHIND_RIDE = "de trás da pessoa carona"
}

export enum Directions {
  LEFT = "esquerda",
  RIGHT = "direita",
}


export class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log("Carro ligado.");
  }

  turnOff(): void {
    console.log("Carro desligado.");
  }

  turn(direction: Directions.LEFT): void {
    console.log(`Virando para a ${direction}.`);
  }

  speedUp(): void {
    console.log("Acelerando o carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando o carro.");
  }

  honk(): void {
    console.log("Buzinando: BIP BIP");
  }

  openTheDoor(door: Door.DRIVER): void {
    console.log(`Abrindo a porta ${door}.`);
  }

  closeTheDoor(door: Door.DRIVER): void {
    console.log(`Fechando a porta ${door}.`);
  }
}

const example = new Car("volks", Colors.Black, 4);
console.log(example);



export default {
  Car,
  Colors,
  Door,
  Directions
};