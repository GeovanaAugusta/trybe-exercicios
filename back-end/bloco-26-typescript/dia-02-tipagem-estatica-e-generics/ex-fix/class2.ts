enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

// A criação das nossas instâncias de Person poderiam ou não serem criadas com a cor dos olhos.
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()


console.log(person2);
person2.walk();

// E poderíamos adicionar essa informação depois da criação:
// const person1 = new Person("Jane Doe", new Date("1986-01-01"));

console.log(person1);
person1.speak()

person1.eyeColor = EyeColor.Brown;
console.log(person1);
