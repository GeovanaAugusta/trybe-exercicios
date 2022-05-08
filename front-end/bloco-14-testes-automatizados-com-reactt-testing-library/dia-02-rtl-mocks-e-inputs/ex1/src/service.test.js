const service = require("./service");

//  1 a 3
describe("Testando a função getRandomNumberBetween do arquivo service.js", () => {
  test("Verifica se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    // Utilize o mock e defina o retorno padrão como 10.
    service.getRandomNumberBetween = jest.fn().mockReturnValue(10);

    // Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
    expect(service.getRandomNumberBetween()).toBe(10);
    expect(service.getRandomNumberBetween).toHaveBeenCalled();
    expect(service.getRandomNumberBetween).toHaveBeenCalledTimes(1);
  });

  // Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.
  test("Verifica se a função foi chamada e a nova implementação de divisão foi aplicada e se a aplicação da nova implementação acontece apenas uma vez.", () => {
    // Defina o mock da função para a nova funcionalidade da função.
    service.getRandomNumberBetween = jest
      .fn(20, 2)
      .mockImplementationOnce((a, b) => a / b);

    // Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
    // Verifique se a aplicação da nova implementação acontece apenas uma vez.
    expect(service.getRandomNumberBetween(20, 2)).toBe(10);
    expect(service.getRandomNumberBetween).toHaveBeenCalled();
    expect(service.getRandomNumberBetween).toHaveBeenCalledTimes(1);
  });

  test("Verifica se a função foi chamada e a nova implementação de multiplicação foi aplicada e se a aplicação da nova implementação acontece uma vez.", () => {
    // Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
    service.getRandomNumberBetween = jest
      .fn(10, 2, 1)
      .mockImplementationOnce((a, b, c) => a * b * c);

    // Realize os testes que achar necessário.

    expect(service.getRandomNumberBetween(10, 2, 1)).toBe(20);
    expect(service.getRandomNumberBetween).toHaveBeenCalled();
    expect(service.getRandomNumberBetween).toHaveBeenCalledTimes(1);

    // Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
    service.getRandomNumberBetween.mockReset();

    // Confirma que foi resetado
    expect(service.getRandomNumberBetween).toHaveBeenCalledTimes(0);

    //  E crie uma nova, que receba apenas um parâmetro e retorne o dobro.
    service.getRandomNumberBetween = jest
      .fn(10)
      .mockImplementationOnce((a) => a * 2);
    //  service.getRandomNumberBetween.mockImplementation(a => a * 2); ou assim

    // Realize os testes que achar necessário.
    expect(service.getRandomNumberBetween(10)).toBe(20);
    expect(service.getRandomNumberBetween).toHaveBeenCalled();
    expect(service.getRandomNumberBetween).toHaveBeenCalledTimes(1);
  });
});

// 4
describe("Testando as funções stringToUpperCase, getFirstLetter e concString do arquivo service.js", () => {

   // Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
  test("Verifica se a primeira função retorna a string em caixa baixa", () => {
    service.stringToUpperCase = jest.fn("OLÁ").mockImplementationOnce((string) => string.toLowerCase());
    // Ou 
    // const mockFirstFunction = jest.spyOn(service, "stringToUpperCase" ).mockImplementation(a => a.toLowerCase());

    // Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
    expect(service.stringToUpperCase("OLÁ")).toBe("olá");
    // Ou
    //  expect(service.stringToUpperCase("OLÁ")).toBe("olá");
    expect(service.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(service.stringToUpperCase).toHaveBeenCalledWith("OLÁ");

  });

    // Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
    test("Verifica se a segunda função retorna a última letra de uma string", () => {

    service.getFirstLetter = jest.fn("Teste").mockImplementationOnce((string) => string.slice(-1));
    // Ou const mockSecondFunction = jest.spyOn(service, "stringToUpperCase").mockImplementation(a => a.charAt(a.length - 1));

    // Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
    // https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
    expect(service.getFirstLetter("Teste")).toBe("e");
    expect(service.getFirstLetter).toHaveBeenCalled();
    expect(service.getFirstLetter).toHaveBeenCalledTimes(1);
    expect(service.getFirstLetter).toHaveBeenCalledWith("Teste");

  });

    // Implemente, na terceira função: ela deve receber três strings e concatená-las.
    test("Verifica se a terceira função recebe três strings e as concatena", () => {
    service.concString = jest.fn("Hello", "there").mockImplementationOnce((string1, string2, string3) =>[string1, string2, string3].join(" "));

    // Ou   const concString = jest.spyOn(service, "thirdFunction").mockImplementation((a, b, c) => a.concat(b, c));

    // Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
    expect(service.concString("Hello", "there")).toBe("Hello there ");
    expect(service.concString).toHaveBeenCalled();
    expect(service.concString).toHaveBeenCalledWith("Hello", "there");
    expect(service.concString).toHaveBeenCalledTimes(1);
  });

    
    test("Verifica se a primeira função foi restaurada", () => {

  // Após criar os testes, restaure a implementação da primeira função.
    service.stringToUpperCase.mockRestore();

    service.stringToUpperCase = jest.fn().mockReturnValue("OLÁ"); // Só inserindo passa

    // Faça o teste necessário para garantir que a implementação da função foi restaurado.
    expect(service.stringToUpperCase).toHaveBeenCalledTimes(0);
    // Pendente
    expect(service.stringToUpperCase("olá")).toBe("OLÁ");
  });

});

// 5
// Mocke a requisição e crie dois testes.
describe("Testando a função fetchAPI do arquivo service.js", () => {

  service.fetchAPI = jest.fn();

  // Faz com que, após cada teste, o mock seja limpo, ou seja, garante que após o teste o fetch não seja mais um mock, isso é bem util para que não tenha interferência entre um teste e outro.
  afterEach(service.fetchAPI.mockReset);
  // Sem isso, falha - TypeError: service.fetchAPI.mockResolvedValue is not a function

  test("Interpreta que a requisição se resolveu e teve como valor 'request sucess'.", async () => {
    service.fetchAPI.mockResolvedValue("request sucess");

    service.fetchAPI();
    expect(service.fetchAPI).toHaveBeenCalled();
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    await expect(service.fetchAPI()).resolves.toBe("request sucess");
    expect(service.fetchAPI).toHaveBeenCalledTimes(2);
  
    });

    test("Interpreta que a requisição falhou e tem como valor 'request failed'.", async () => {
      service.fetchAPI.mockRejectedValue("request failed");
  
      expect(service.fetchAPI).toHaveBeenCalledTimes(0);
      await expect(service.fetchAPI()).rejects.toMatch("request failed");
      expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    });
  
    });
