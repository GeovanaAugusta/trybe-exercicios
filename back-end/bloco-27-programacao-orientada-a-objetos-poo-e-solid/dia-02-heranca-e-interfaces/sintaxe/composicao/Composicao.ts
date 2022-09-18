// Crie uma interface Logger.
interface Logger {
// Logger deve possuir um método log, que recebe um parâmetro do tipo string e não retorna nada (void).
log(param: string): void;
}

// Crie uma classe ConsoleLogger que implementa Logger. Você deve imaginar como o método log deve ser implementado, né? 😁.
class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

// Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo.
class ConsoleLogger2 implements Logger {
  log(param: string): void {
  // No console.log dentro do método log, diferencie o ConsoleLogger2 do ConsoleLogger.
  console.log('Logger2: ' + param);
}
}

// Crie uma interface Database.
interface Database {
// Database deve possuir um atributo do tipo Logger.
logger: Logger;
// Database deve possuir um método save, que recebe dois parâmetros, key e value, ambos strings, e não retorna nada (void).
save(key: string, value: string): void;

}

// Crie uma classe ExampleDatabase que implementa Database.
class ExampleDatabase implements Database {
// ExampleDatabase deve receber o Logger como parâmetro do construtor, e possuir como valor padrão um ConsoleLogger.
constructor(public logger: Logger = new ConsoleLogger()) { }
// Dentro do método save, chame a função log do Logger passado para o database para fazer o log dos parâmetros passados para a save.
save(key: string, value: string): void {
  this.logger.log(`Salvando o valor ${value} na chave ${key}`);
}
}

// Crie um objeto de cada um dos Loggers.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
console.log('logger1', logger1);
console.log('logger2', logger2);


// Crie três objetos da ExampleDatabase, cada um dos dois primeiros recebendo um dos Loggers, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();
console.log('database1', database1);
console.log('database2', database2);
console.log('database3', database3);


// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');