"use strict";
// Exercício 4: Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
// Retorne em que estação aquele mês se encontra.
// Caso seja um mês que possua duas estações retorne ambas.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercises_1 = require("./exercises");
const monthsNames = Object.values(exercises_1.MonthsYear);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface de escolha para a pessoa usuária
const seasonsSouth = {
    [exercises_1.Seasons.AUTUMN]: [exercises_1.MonthsYear.MARCH, exercises_1.MonthsYear.APRIL, exercises_1.MonthsYear.MAY, exercises_1.MonthsYear.JUNE],
    [exercises_1.Seasons.WINTER]: [exercises_1.MonthsYear.JUNE, exercises_1.MonthsYear.JULY, exercises_1.MonthsYear.AUGUST, exercises_1.MonthsYear.SEPTEMBER],
    [exercises_1.Seasons.SPRING]: [exercises_1.MonthsYear.SEPTEMBER, exercises_1.MonthsYear.OCTOBER, exercises_1.MonthsYear.NOVEMBER, exercises_1.MonthsYear.DECEMBER],
    [exercises_1.Seasons.SUMMER]: [exercises_1.MonthsYear.DECEMBER, exercises_1.MonthsYear.JANUARY, exercises_1.MonthsYear.FEBRUARY, exercises_1.MonthsYear.MARCH],
};
// Criamos um objeto onde suas chaves são as estações e seus valores são os meses. Note abaixo um segundo objeto onde, sendo do hemisfério oposto, as estações são opostas também
const seasonsNorth = {
    [exercises_1.Seasons.SPRING]: seasonsSouth[exercises_1.Seasons.AUTUMN],
    [exercises_1.Seasons.SUMMER]: seasonsSouth[exercises_1.Seasons.WINTER],
    [exercises_1.Seasons.AUTUMN]: seasonsSouth[exercises_1.Seasons.SPRING],
    [exercises_1.Seasons.WINTER]: seasonsSouth[exercises_1.Seasons.SUMMER],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface de escolha para a pessoa usuária
const month = Object.values(exercises_1.MonthsYear)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja incluído em mais de uma estação, o console abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
