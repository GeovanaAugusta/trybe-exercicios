// Outra forma de uso comum para generics é com interfaces e classes:

function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

// Os generics definem uma ou mais variáveis de tipo para identificar o tipo ou tipos que serão passados para o componente, colocados entre colchetes angulares (< >). T é um nome comumente usado para um generic, mas você pode nomeá-lo como desejar.

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25, 12);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
console.log(numberArray);

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
console.log(stringArray);

function identity<T, U> (value: T, message: U) : T {
  console.log('message', message);
  return value
}

let returnNumber2 = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

class ProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
  }
  getIdentity() : T {
      console.log('message2', this._message);
      return this._value
  }
}

let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity();  // imprime "Olá" e retorna 100
