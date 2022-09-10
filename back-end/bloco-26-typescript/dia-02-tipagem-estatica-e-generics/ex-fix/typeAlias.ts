type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}
printCoord({ x: 100, y: 100 });

//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100


// Crie um type para um objeto que represente um pássaro.
type Bird = {
  x: string;
  y: string;
};


function printBird(bd: Bird) {
  console.log("O nome do pássaro x é: " + bd.x);
  console.log("O nome do pássaro y é: " + bd.y);
}
printBird({ x: 'Sabiá', y:  'Andorinha'});

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Numbers = {
  x: number;
  y: number;
};


function printNumber(nb: Numbers) {
  console.log(`O valor da soma é: ${nb.x + nb.y}`);
}
printNumber({ x: 100, y: 100 });


// Crie um type para um objeto que represente um endereço.
type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
};


function printAddress(add: Address) {
  console.log(`O endereço é:  ${add.publicPlace}, ${add.number}, ${add.district}, ${add.city}, ${add.state}.`);
}
printAddress({ publicPlace: 'Rua June', number: 12, district: 'Camargos', city: 'BH', state: 'MG' });