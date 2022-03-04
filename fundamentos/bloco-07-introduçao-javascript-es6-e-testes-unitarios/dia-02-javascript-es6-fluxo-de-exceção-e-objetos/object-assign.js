const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

const info = {
    age: 23,
    job: 'engenheiro',
};

const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

// Como se adicionasse propriedades dentro de um objeto com a estrutura:
//  Object.assign(destino, obj1, ob2...), onde destino é SEMPRE o primeiro parâmetro e é objeto de destino e os que seguem são os objetos que serão adicionados ao objeto de destino!

// A chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info . Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino *sempre utilizará o último valor disponível*.
