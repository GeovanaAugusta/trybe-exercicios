// - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda.


function nomes (words) {

let maiorNome = words[0];

 for (let value in words) {
    if (words[value].length > maiorNome.length) {
        maiorNome = words[value];
    }
}
return maiorNome;
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

