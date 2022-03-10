// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); 
console.log(verifyFirstLetter('x', listNames)); 

// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
// Observe que foi usado Object.values junto com o every . Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));