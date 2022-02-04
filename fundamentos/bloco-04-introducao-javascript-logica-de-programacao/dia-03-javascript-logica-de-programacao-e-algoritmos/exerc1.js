// Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

// Aqui usei o for regressivo, apesar da ordem dos fatores não alterar o resultado, ainda sim, fatorial é uma multiplicação regressiva que vai do número até 1, regressivamente. E usei *= para não precisar repetir fatorial *.

for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
    }

    console.log(fatorial);