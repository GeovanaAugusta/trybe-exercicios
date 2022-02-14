// Desafio 11
function generatePhoneNumber(numbers) {
    // seu código aqui
    
    let contador = 0;
    if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
   }
    for (let index of numbers) {
        let contador = 0
    for (let index2 of numbers) {
  
        if (index === index2) {
             contador += 1;
             
         } if (contador >= 3 || index < 0 || index > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        } }}
         for (index = 0; index < numbers.length; index += 1) {
         if ( contador <= 3 || index > 0 || index < 9) {
     return'(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] +numbers[9] + numbers[10]
        }}
  }
  generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])
  
  // Desafio 12
  function triangleCheck(lineA, lineB, lineC) {
    // seu código aqui
    let difBC = Math.abs(lineB - lineC);
    let difAC = Math.abs(lineA - lineC);
    let difAB = Math.abs(lineA - lineB);
  
  
    if (lineA < (lineB + lineC) && lineA > difBC) {
      return true;
   } else if (lineB < (lineA + lineC) && lineB > difAC) {
      return true;
    } else if (lineC < (lineA + lineB) && lineC > difAB) {
      return true;
  } 
      return false;
    }
  triangleCheck(10, 14, 8);
  
  // Desafio 13
  function hydrate(string) {
    // seu código aqui
    for (let index = 0; index < string.length; index +=1) {
      replacedString = string.replace(/1 copo de catuaba, 1 cervejas e 1 copo de vinho/g, '3 copos de água').replace(/1 cerveja/g, '1 copo de água').replace(/1 cachaça, 5 cervejas e 1 copo de vinho/g, '7 copos de água').replace(/2 shots de tequila, 2 cervejas e 1 corote/g, '5 copos de água').replace(/4 caipirinhas e 2 cervejas/g, '6 copos de água');
         
         
      }
      return replacedString
  
       }
  hydrate('1 cerveja')