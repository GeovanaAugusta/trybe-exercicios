// - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callback) => {
    const employees = {
        id1: email('Pedro Guerra'),
        id2: email('Luiza Drumond'),
        id3: email(' Carla Paiva'),
    }
    return employees;
};

const email = (fullName) => {
    const rightEmail = fullName.replace(/ /g, "_").toLowerCase();
    return {fullName: `${fullName}`, email: `${rightEmail}@trybe.com `}

}
console.log(email('Pedro Guerra'))
console.log(email('Luiza Drumond'))
console.log(email('Carla Paiva'))



