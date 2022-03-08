function encode(string) {
    // seu código aqui
    for (let index = 0; index < string.length; index +=1) {
      
      replacedString = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5')
         
      }
      return replacedString
  }
  
  module.exports = {encode}
  
 