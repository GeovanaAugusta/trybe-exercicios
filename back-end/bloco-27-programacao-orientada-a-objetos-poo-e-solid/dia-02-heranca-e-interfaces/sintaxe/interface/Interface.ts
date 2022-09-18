// Crie uma interface chamada MyInterface.
interface MyInterface {
  // MyInterface deve possuir um atributo myNumber do tipo number.
  myNumber: number;

  // MyInterface deve possuir um método myFunc, que recebe um parâmetro myParam do tipo number e retorna uma string.
  myFunc(myParam: number): string;
}

// Crie uma classe MyClass que implementa MyInterface.
class MyClass implements MyInterface {

  // Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.
  constructor(public myNumber: number) { }

  // Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.
  myFunc(myParam: number): string {
    return `A soma de myNumber e myParam é : ${this.myNumber + myParam}`
  }
}

// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc.
const myObject = new MyClass(2);
console.log('myObject', myObject);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));