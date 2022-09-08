// Exercício 6: Crie um script para converter unidades de medida de massa:

// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

// Exercício 10: Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote readline-sync, documentação.
// Em cada script, crie uma função chamada exec que:

// Capta as entradas da pessoa usuária via terminal;
// Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
// Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
// Não se esqueça de chamar a função exec ao final do script. exec();“

import readline from "readline-sync"; 

const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, baseUnit: string, unitToConvert: string): number {
    const fromIndex = unitsMass.indexOf(baseUnit); 
    const toIndex = unitsMass.indexOf(unitToConvert); 
    const exponent = (toIndex - fromIndex); 

    return value * Math.pow(10, exponent);
}
// console.log(convertMass(125, 'km', 'm'));

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  const fromUnitChoiceIndex = readline.keyInSelect(unitsMass, "Escolha um número para a unidade base:");

  const toUnitChoiceIndex = readline.keyInSelect(unitsMass, "Escolha um número para a conversão:");


  const fromUnitChoice = unitsMass[fromUnitChoiceIndex];
  const toUnitChoice = unitsMass[toUnitChoiceIndex];

  const result = convertMass(value, fromUnitChoice, toUnitChoice)

  const message = `${value} ${fromUnitChoice} é igual a ${result} ${toUnitChoice}`

  console.log(message);
}

exec();