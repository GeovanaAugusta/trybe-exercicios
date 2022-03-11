const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven);

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2);




// Outro exemplo de apenas pegar os elementos que não possuem alguma condição.
//  Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:


const objPeople = [{
        name: 'José',
        age: 21
    },
    {
        name: 'Lucas',
        age: 19
    },
    {
        name: 'Maria',
        age: 16
    },
    {
        name: 'Gilberto',
        age: 18
    },
    {
        name: 'Vitor',
        age: 15
    },
];

const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));



// Outro exemplo de apenas pegar os elementos que não possuem alguma condição. 
// Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:


const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
    listStudents.filter((student) => student !== name);
// Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents);


// Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado. Se tiver ficado confuso, rode esse código por conta própria e altere um pouco o seu funcionamento! Isso ajudará muito.