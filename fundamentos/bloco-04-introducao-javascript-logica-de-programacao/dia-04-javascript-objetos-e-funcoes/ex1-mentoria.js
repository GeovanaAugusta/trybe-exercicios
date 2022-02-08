// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.

// Fórmulas: perimetro = (2base) + (2altura) area = base * altura



function operacao (base, altura) {
    let perimetro = (2 * base + (2 * altura));
    let area = (base * altura)

    return {area, perimetro}

}


console.log(operacao(25, 30))

// OU

function operacao (base, altura) {
    let perimetro = (2 * base + (2 * altura));
    let area = (base * altura)

let calculos = {
    area: area,
    perimetro: perimetro,
}

    return calculos

}


console.log(operacao(25, 30))