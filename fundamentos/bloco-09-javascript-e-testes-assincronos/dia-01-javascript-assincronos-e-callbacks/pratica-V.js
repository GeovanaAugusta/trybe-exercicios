// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('Verifica se todas as palavras estão em maiúsculo', (done) => {
  setTimeout(() => {
    try {
      expect(str).toBe(uppercase);
      console.log('Todas estão ');
      done();
    } catch (error) {
      done();
    }
  }, 500);
});