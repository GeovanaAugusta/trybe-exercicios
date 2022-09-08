// Exercício 6: Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

// Exercício 10: Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote readline-sync, documentação.


var unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, baseUnit, unitToConvert) {
    var fromIndex = unitsMass.indexOf(baseUnit);
    console.log(fromIndex);
    var toIndex = unitsMass.indexOf(unitToConvert);
    console.log(toIndex);
    var exponent = (toIndex - fromIndex);
    console.log(exponent);
    return value * Math.pow(10, exponent);
}
console.log(convertMass(125, 'kg', 'g'));
