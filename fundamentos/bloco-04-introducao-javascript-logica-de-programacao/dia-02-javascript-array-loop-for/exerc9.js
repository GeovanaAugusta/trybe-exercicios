// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .



let numbers = [];


// Disse aqui para o laço for que o index vai de 1 até o 25, já que vai ter 25 elementos e que deve começar do 1.
for (let index = 1; index < 26; index +=1) {

// Aqui coloquei o .push para inserir no array vazio os números de 1 a 25, conforme condição inserida acima.

    numbers.push(index);
}

for (let index = 0; index < numbers.length; index += 1) {
  let numbersDivi = numbers[index] / 2;
  console.log(numbersDivi);

}



// Verificar o motivo do console.log após o for somente dividir o último número por 2.