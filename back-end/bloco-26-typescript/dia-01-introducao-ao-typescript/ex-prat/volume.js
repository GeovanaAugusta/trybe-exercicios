// Exercício 9: Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.

var unitsVolum = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolum(value, baseUnit, unitToConvert) {
    var fromIndex = unitsVolum.indexOf(baseUnit);
    var toIndex = unitsVolum.indexOf(unitToConvert);
    var exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
console.log(convertVolum(1, 'km³', 'm³'));
