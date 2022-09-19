// 🚀 Exercício 2: Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.
// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from "./Person";

export default class Student extends Person {
   _enrollment: string;
   _examsGrades: number[] = [];
   _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) { 
    super(name, birthDate);
    this._enrollment = this.generateEnrollment()
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if(value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if(value.length > 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos')
    this._worksGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this._examsGrades.length + this._worksGrades.length;

    return Math.round(sumGrades / divider);
  }
}