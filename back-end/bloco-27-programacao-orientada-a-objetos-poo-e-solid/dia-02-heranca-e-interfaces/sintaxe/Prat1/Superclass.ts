// Crie uma classe chamada Superclass.

// A Superclass deve possuir um atributo público isSuper

// isSuper deve ser setado como true na inicialização.

// A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.

// Crie uma classe chamada Subclass que herda da Superclass.

// Crie uma função myFunc fora do escopo da Subclass que recebe um objeto da Superclass.

// Dentro dessa função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass.

// Chame a função myFunc 2 vezes, passando os objetos criados.


// Crie uma classe chamada _Superclass_.
class Superclass {
  // A _Superclass_ deve possuir um atributo público _isSuper_.
  isSuper: boolean;

  constructor() {
    // _isSuper_ deve ser setado como `true` na inicialização.
    this.isSuper = true;
  }

  // A _Superclass_ deve possuir um método público chamado `sayHello`, que deve imprimir "Olá mundo!".
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

// Crie uma classe chamada _Subclass_ que herda da _Superclass_.
class Subclass extends Superclass { }

// Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
const myFunc = (object: Superclass) => {
  // Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
  object.sayHello();
};

// Crie um objeto da _Superclass_ e outro da _Subclass_.
const sup = new Superclass();
const sub = new Subclass();

// Chame a função `myFunc` 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);


// No construtor da Subclass, o atributo isSuper deve ser setado como false. Você vai precisar utilizar o super.

// Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console “Super!” se for true e “Sub!” se for false;

class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  // No construtor da _Subclass_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  // Dentro da função que recebe um objeto da _Superclass_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);