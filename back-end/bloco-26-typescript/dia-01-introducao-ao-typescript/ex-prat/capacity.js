// Exercício 7: Crie um script para converter unidades de medida de capacidade:
// Esse script deverá se chamar capacity.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

var unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, baseUnit, unitToConvert) {
    var fromIndex = unitsCapacity.indexOf(baseUnit);
    var toIndex = unitsCapacity.indexOf(unitToConvert);
    var exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log(convertCapacity(125, 'ml', 'kl'));
