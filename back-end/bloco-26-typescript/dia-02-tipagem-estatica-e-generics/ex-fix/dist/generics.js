"use strict";
// Outra forma de uso comum para generics é com interfaces e classes:
function getArray(items) {
    return new Array().concat(items);
}
// Os generics definem uma ou mais variáveis de tipo para identificar o tipo ou tipos que serão passados para o componente, colocados entre colchetes angulares (< >). T é um nome comumente usado para um generic, mas você pode nomeá-lo como desejar.
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25, 12);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
console.log(numberArray);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
console.log(stringArray);
function identity(value, message) {
    console.log('message', message);
    return value;
}
let returnNumber2 = identity(100, "Olá");
let returnString = identity("100", "Mundo");
let returnBoolean = identity(true, "Olá, Mundo!");
class ProcessIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log('message2', this._message);
        return this._value;
    }
}
let processor = new ProcessIdentity(100, "Olá");
processor.getIdentity(); // imprime "Olá" e retorna 100
