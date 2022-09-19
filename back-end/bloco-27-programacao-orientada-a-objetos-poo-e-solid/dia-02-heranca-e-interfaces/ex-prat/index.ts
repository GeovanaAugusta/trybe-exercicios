import Person from "./Person";
import Student from "./PersonRefact";
import Employee from "./Employee";
import Subject from "./Subject";
import Teacher from "./Teacher";

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
// const invalidPersonName = new Person('An', new Date('2000/06/07'));

// console.log(maria);
// console.log(luiza);
// console.log(invalidPersonName);


const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
carolina.worksGrades= [40, 40];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];
// fernando.worksGrades = [45, 45, 45]; // Lança erro de ter mais de 2 notas

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// console.log('Soma de todas as notas: ', carolina.sumGrades());
// console.log('Média de todas as notas: ', carolina.sumAverageGrade());

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

// console.log(testInterfaceEmployee);

// const x = new Subject('Math');
// console.log(x);

// const erro = new Subject('x');
// console.log(erro);

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');
// const x = new Subject('x');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);
// const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), -2000, math);
// const invalidTeacherSubject = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, x);

console.log(marta);
console.log(joao);
console.log(lucio);
// console.log(invalidTeacherSalary);
// console.log(invalidTeacherSubject);
const today = new Date();
today.setDate(today.getDate() + 1)
const tomorrow = today;
marta.admissionDate = tomorrow;
