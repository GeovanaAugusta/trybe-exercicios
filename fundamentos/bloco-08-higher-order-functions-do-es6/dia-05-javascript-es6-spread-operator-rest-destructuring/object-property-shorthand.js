//  Observe que as propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. 

const newUser = (id, name, email) => {
  return {
    id, // Ao invés de id: id, name:name, quase que redundância e ele elimina isso
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }