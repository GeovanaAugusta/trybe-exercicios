function hydrate(string) {
    // seu código aqui
    for (let index = 0; index < string.length; index +=1) {
      replacedString = string.replace(/1 copo de catuaba, 1 cervejas e 1 copo de vinho/g, '3 copos de água').replace(/1 cerveja/g, '1 copo de água').replace(/1 cachaça, 5 cervejas e 1 copo de vinho/g, '7 copos de água').replace(/2 shots de tequila, 2 cervejas e 1 corote/g, '5 copos de água').replace(/4 caipirinhas e 2 cervejas/g, '6 copos de água');
         
         
      }
      return replacedString
  
       }

       module.exports = hydrate;