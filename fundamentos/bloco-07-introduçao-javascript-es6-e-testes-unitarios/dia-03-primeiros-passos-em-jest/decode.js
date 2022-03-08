function decode(numbers) {
    // seu código aqui
    for (let index = 0; index < numbers.length; index +=1) {
      
      let replacedNumber = numbers.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u')
     
      return replacedNumber;
     
       }
  }

  module.exports = {decode}