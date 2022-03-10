// forEach 
// Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função forEach . 

const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  
  //  Array.find 
  // Ponto de observação: note que o parâmetro passado para numbers.find(), number => number % 5 == 0 , é uma arrow function, igual no primeiro exemplo de forEach, em que foi passada a função verifyGrade .
  
  const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
  const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);
  
  console.log(firstMultipleOf5);