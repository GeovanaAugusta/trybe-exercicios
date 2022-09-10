"use strict";
let employee = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
    }
};
console.log(employee.fullName());
// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"
employee.firstName = 'Geovana';
let teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
};
console.log(teacher.sayHello());
let car = {
    name: "Ferrari",
    color: "preto",
    car() {
        return "Meu carro é uma " + "" + this.name + " " + "e é " + this.color;
    }
};
console.log(car.car());
let animal = {
    name: "Jaguar",
    color: "marrom",
    animal() {
        return "O animal é um " + "" + this.name + " " + "e é " + this.color;
    }
};
console.log(animal.animal());
let aero = {
    name: "Pampulha",
    local: "Belo Horizonte",
    aero() {
        return "O aero se chama " + "" + this.name + " " + "e é localizado em " + this.local;
    }
};
console.log(aero.aero());
