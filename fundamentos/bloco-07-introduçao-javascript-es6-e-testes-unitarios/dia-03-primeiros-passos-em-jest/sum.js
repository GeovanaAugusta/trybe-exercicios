function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  const showmesage = (a, b) => {
    try{
        const mesage = sum(a, b);
        return `A soma dos números de ${a, b} é ${sum}`
    } catch(error){
        return `Erro: ${error.message}`
    }
}


  
  // implemente seus testes aqui
  module.exports = {sum}