// Agora vamos criar um pacote Node para converter unidades de medidas no Sistema Internacional:

// Exercício 5: Crie um script para converter unidades de medida de comprimento:

// Esse script deverá se chamar length.ts;
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

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, baseUnit: string, unitToConvert: string): number {
    const fromIndex = units.indexOf(baseUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(unitToConvert); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}
// console.log(convert(125, 'km', 'm'));

function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a unidade base:");
  
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a conversão:");
  
  
    const fromUnitChoice = units[fromUnitChoiceIndex];
    const toUnitChoice = units[toUnitChoiceIndex];
  
    const result = convert(value, fromUnitChoice, toUnitChoice)
  
    // montamos a mensagem de saída
    const message = `${value} ${fromUnitChoice} é igual a ${result} ${toUnitChoice}`
  
    // printamos a mensagem de saída no terminal
    console.log(message);
  }
  
  exec();