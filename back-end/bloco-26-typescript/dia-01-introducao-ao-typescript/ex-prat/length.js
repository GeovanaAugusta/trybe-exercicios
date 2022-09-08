// Agora vamos criar um pacote Node para converter unidades de medidas no Sistema Internacional:
// Exercício 5: Crie um script para converter unidades de medida de comprimento:
// Esse script deverá se chamar length.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

var units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, baseUnit, unitToConvert) {
    var fromIndex = units.indexOf(baseUnit); // pegamos o index da unidade base no array
    var toIndex = units.indexOf(unitToConvert); // pegamos o index da unidade para a conversão
    var exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convert(125, 'm', 'kg'));
