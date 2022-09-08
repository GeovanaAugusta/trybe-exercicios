// Exercício 9: Crie um script para converter unidades de medida de volume:

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

import readline from "readline-sync"; 

const unitsVolum = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolum(value: number, baseUnit: string, unitToConvert: string): number {
    const fromIndex = unitsVolum.indexOf(baseUnit); 
    const toIndex = unitsVolum.indexOf(unitToConvert); 
    const exponent = (toIndex - fromIndex); 

    return value * Math.pow(1000, exponent);
}
// console.log(convertVolum(1, 'km³', 'm³'));

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  const fromUnitChoiceIndex = readline.keyInSelect(unitsVolum, "Escolha um número para a unidade base:");

  const toUnitChoiceIndex = readline.keyInSelect(unitsVolum, "Escolha um número para a conversão:");


  const fromUnitChoice = unitsVolum[fromUnitChoiceIndex];
  const toUnitChoice = unitsVolum[toUnitChoiceIndex];

  const result = convertVolum(value, fromUnitChoice, toUnitChoice)

  const message = `${value} ${fromUnitChoice} é igual a ${result} ${toUnitChoice}`

  console.log(message);
}

exec();