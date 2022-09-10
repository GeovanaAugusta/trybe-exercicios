interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}
console.log(employee.fullName());


// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"
employee.firstName = 'Geovana';

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}
console.log(teacher.sayHello());

// Observe que um objeto que atende à interface Teacher precisa definir valores para todas as propriedades exigidas por essa interface, incluindo as propriedades da interface base Employee.

// Por exemplo, o objeto teacher possui as propriedades firstName, lastName e o método fullName da interface Employee, mas também possui as próprias propriedade subject e o método sayHello que são específicas da interface Teacher.

// Classes também podem implementar interfaces, o que faz com que a classe possua todas as propriedades e métodos daquela interface.

// Crie uma interface cujo objeto represente um Automóvel.
interface Car {
  name: string;
  color: string;
  car(): string;
}

let car: Car = {
  name : "Ferrari",
  color: "preto",
  car(): string {
      return "Meu carro é uma " + "" + this.name + " " + "e é " + this.color; 
  }
}
console.log(car.car());

// Crie uma interface cujo objeto represente um Felino.
interface Animal {
  name: string;
  color: string;
  animal(): string;
}

let animal: Animal = {
  name : "Jaguar",
  color: "marrom",
  animal(): string {
      return "O animal é um " + "" + this.name + " " + "e é " + this.color; 
  }
}
console.log(animal.animal());

// Crie uma interface cujo objeto represente uma Aeronave.
interface Aero {
  name: string;
  local: string;
  aero(): string;
}

let aero: Aero = {
  name : "Pampulha",
  local: "Belo Horizonte",
  aero(): string {
      return "O aero se chama " + "" + this.name + " " + "e é localizado em " + this.local; 
  }
}
console.log(aero.aero());