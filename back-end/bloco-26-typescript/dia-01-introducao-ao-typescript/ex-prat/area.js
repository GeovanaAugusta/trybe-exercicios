// Exercício 8: Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts;
// Ele script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.

var unitsArea = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value, baseUnit, unitToConvert) {
    var fromIndex = unitsArea.indexOf(baseUnit);
    var toIndex = unitsArea.indexOf(unitToConvert);
    var exponent = (toIndex - fromIndex);
    return value * Math.pow(100, exponent);
}
console.log(convertArea(1, 'km²', 'm²'));
