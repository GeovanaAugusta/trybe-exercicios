// Desafio 1
function compareTrue(a, b) {
    // seu código aqui
    if (a === true && b === true) {
      return true;
    }
    return false;
    }
  compareTrue(true, true);
  
  // Desafio 2
  function calcArea(base, height) {
    // seu código aqui
  return (base) * (height / 2);
  }
  calcArea(10, 5);
  
  // Desafio 3
  function splitSentence(string) {
    // seu código aqui
    let newString = string.split(' ');
    return newString;
  }
  splitSentence('go Trybe');
  
  // Desafio 4
  function concatName(strings) {
    // seu código aqui
    let lastString = strings.pop();
    return lastString + ', ' + strings[0];
  }
  concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
  
  // Desafio 5
  function footballPoints(wins, ties) {
    // seu código aqui
    let totalPoints = ((wins * 3) + (ties * 1));
    return totalPoints;
  }
  footballPoints(14, 8);
  
  // Desafio 6
  function highestCount(numbers) {
    // seu código aqui
    let maiorNum = numbers[0];
    let contador = 0; 
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] > maiorNum) {
        maiorNum = numbers[index];
      }
      if (numbers[index] >= maiorNum) {
                maiorNum = numbers[index];
       }
       }
  for (let index = 0; index < numbers.length; index +=1) { 
    if (maiorNum == numbers[index]) {
                  contador += 1;
              }
            }
            return contador;    
        }
  
    highestCount([9, 1, 2, 3, 9, 5, 7])
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    let distCat1 = Math.abs(cat1 - mouse); 
    let distCat2 = Math.abs(cat2 - mouse);
    let frase = '';
  
    if (distCat1 < distCat2) {
     frase = 'cat1';
    } else if (distCat1 > distCat2) {
     frase = 'cat2'
    } else {
     frase = 'os gatos trombam e o rato foge';
    }
    return frase;
  }
  catAndMouse(0, 2, 1)
  
  
  // Desafio 8
  function fizzBuzz(numbers) {
    // seu código aqui
    let arrayExpress = [];
  
      for (let index = 0; index < numbers.length; index +=1) {
          if(numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
              arrayExpress.push('fizzBuzz');  
                  } else if (numbers[index] % 5 === 0) {
              arrayExpress.push('buzz');
          } else if (numbers[index] % 3 === 0) {
              arrayExpress.push('fizz');  
          } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0) {
              arrayExpress.push('bug!');
              }
     }
     return(arrayExpress);
  }
  
  fizzBuzz([2, 15, 7, 9, 45]);
  
  // Desafio 9
  function encode(string) {
    // seu código aqui
    for (let index = 0; index < string.length; index +=1) {
      
      replacedString = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5')
         
      }
      return replacedString
  }
  
  function decode(numbers) {
    // seu código aqui
    for (let index = 0; index < numbers.length; index +=1) {
      
      let replacedNumber = numbers.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u')
     
      return replacedNumber;
     
       }
  }
  
  decode('hi, there');
  encode('hi, there')
  
  
  // Desafio 10
  function techList(tech, name) {
    // seu código aqui
    let objeto = [];
      let techSort = tech.sort()
  
    for (let index = 0; index < tech.length; index +=1) {
        objeto.push({
            tech: tech[index],
            name: name,
        })
          }
          if (tech.length === 0) {
            return 'Vazio!'
          }
  return objeto
  }
  techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas")