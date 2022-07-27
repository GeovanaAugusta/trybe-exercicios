const readline = require('readline-sync');

// 1 Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
const imcCalculation = (weight, height) => {
  const imc = weight/((height/100)*(height/100))
  return imc.toFixed(2)
}
// console.log(imc(56, 1.6));


//  3 Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// function main() {
// const peso = readline.questionInt('Qual o seu peso? (em kg)');
//    const altura = readline.questionFloat('Qual a sua altura? (em cm)');
  
//    console.log(imcCalculation(peso, altura));
//   }

//   main();


  // 4  Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
  // function main() {
  //   const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  //      const altura = readline.questionFloat('Qual a sua altura? (em cm)');
      
  //      console.log(imcCalculation(peso, altura));
  //     }
    
  //     main();

 // 5 Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
 function situationCalculation(imc) {
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
}
 }

 function main() {
  const weight = readline.questionFloat('Qual o seu peso? (em kg)');
  const height = readline.questionFloat('Qual a sua altura? (em cm)');
  const imc = imcCalculation(weight, height);

     console.log(`Seu imc é: ${imcCalculation(weight, height)}`);
     const situacao = situationCalculation(imc);     
    }
  
    main();