const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNight = (object, key, value) => {
    object[key] = value;
}
addNight(lesson2, 'turno', 'noite');
console.log(lesson2);

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keys = (object) => {
    const objectKey = Object.keys(object)
    console.log(objectKey);
}
keys(lesson2);

// 3 Crie uma função para mostrar o tamanho de um objeto. Key mostra todas as propriedades, logo, o tamanho é em função disso.
// https://pt.stackoverflow.com/questions/15058/como-saber-o-tamanho-quantidade-de-propriedades-atributos-de-um-objeto-em-ja

const objectSize = (object) => {
    const objectSizeKey = Object.keys(object).length;
    console.log(objectSizeKey);
}
objectSize(lesson2);

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValue = (object) => {
    const objectValues = Object.values(object);
    console.log(objectValues);
}
objectValue(lesson2);

// 5 Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons). Pra não sobrescrever quando tem keys iguais, usa { objetos dentro } pra agrupá-los mantendo todos com suas chaves e valores.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sum = (object) => {
    let total = 0;
    const arrayAllLessons = Object.keys(object);
    // console.log(arrayAllLessons)
    for (let key in arrayAllLessons) {
        total += object[arrayAllLessons[key]].numeroEstudantes;
        // console.log(arrayAllLessons[key])
        // console.log(total)
    }
    return total;
};
console.log(sum(allLessons));

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const getValueByNumber = (object, key) => {
    const arrayLessonX = Object.values(object);
    for (let value of arrayLessonX) {
        const values = arrayLessonX[key];
        return values;
    }
}
console.log(getValueByNumber(lesson1, 0));

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (object, key, value) => {
    const arrayKeyValue = Object.entries(object);
    // console.log(arrayKeyValue)
    let equal = false;
    for (let keys in arrayKeyValue) {
      if (arrayKeyValue[keys][0] === key && arrayKeyValue[keys][1] === value) equal = true;
    }
    return equal;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

console.log(verifyPair(lesson3, 'turno', 'noite'));
// // // Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // // Output: false
console.log(verifyPair(lesson3, 'turno', 'noite'));
// // // Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false 


