// Exercício 4: Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
// Retorne em que estação aquele mês se encontra.
// Caso seja um mês que possua duas estações retorne ambas.

// npm install readline-sync
// npm install -D @types/readline-sync os types

// ./index.ts

import { exit } from "process";
import readline from "readline-sync";
import {MonthsYear, Seasons} from "./exercises";

const monthsNames = Object.values(MonthsYear);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const seasonsSouth = {
    [Seasons.AUTUMN]: [MonthsYear.MARCH, MonthsYear.APRIL, MonthsYear.MAY, MonthsYear.JUNE],
    [Seasons.WINTER]: [MonthsYear.JUNE, MonthsYear.JULY, MonthsYear.AUGUST, MonthsYear.SEPTEMBER],
    [Seasons.SPRING]: [MonthsYear.SEPTEMBER, MonthsYear.OCTOBER, MonthsYear.NOVEMBER, MonthsYear.DECEMBER],
    [Seasons.SUMMER]: [MonthsYear.DECEMBER, MonthsYear.JANUARY, MonthsYear.FEBRUARY, MonthsYear.MARCH],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.SPRING]: seasonsSouth[Seasons.AUTUMN],
    [Seasons.SUMMER]: seasonsSouth[Seasons.WINTER],
    [Seasons.AUTUMN]: seasonsSouth[Seasons.SPRING],
    [Seasons.WINTER]: seasonsSouth[Seasons.SUMMER],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const month = Object.values(MonthsYear)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});