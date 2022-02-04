// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let inverse = ""

// Fiz um for regressivo, que não começa da primeira letra e sim da última, embaixo usei concatenação de strings através do += que consiste em juntar letra a letra após cada for.

for (index = (word.length - 1); index >= 0; index -= 1) {
inverse += word[index];
}
console.log(inverse)