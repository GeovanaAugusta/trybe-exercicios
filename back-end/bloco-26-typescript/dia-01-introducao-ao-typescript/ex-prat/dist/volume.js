"use strict";
// Exercício 9: Crie um script para converter unidades de medida de volume:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Esse script deverá se chamar volume.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.
// Exercício 10: Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote readline-sync, documentação.
// Em cada script, crie uma função chamada exec que:
// Capta as entradas da pessoa usuária via terminal;
// Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
// Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
// Não se esqueça de chamar a função exec ao final do script. exec();“
const readline_sync_1 = __importDefault(require("readline-sync"));
const unitsVolum = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVolum(value, baseUnit, unitToConvert) {
    const fromIndex = unitsVolum.indexOf(baseUnit);
    const toIndex = unitsVolum.indexOf(unitToConvert);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
// console.log(convertVolum(1, 'km³', 'm³'));
function exec() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsVolum, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(unitsVolum, "Escolha um número para a conversão:");
    const fromUnitChoice = unitsVolum[fromUnitChoiceIndex];
    const toUnitChoice = unitsVolum[toUnitChoiceIndex];
    const result = convertVolum(value, fromUnitChoice, toUnitChoice);
    const message = `${value} ${fromUnitChoice} é igual a ${result} ${toUnitChoice}`;
    console.log(message);
}
exec();
