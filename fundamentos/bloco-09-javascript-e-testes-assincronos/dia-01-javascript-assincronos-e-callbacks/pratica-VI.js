// 10 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Primeiro o 1 - beforeEach, depois o 1 - test, depois 1 - after each, 1 - beforeEach. Aí depois o 2 - beforeEach, depois o  2 - test e por fim, 2 - afterEach, 1 - afterEach

// 1 - beforeEach // antes de cada teste
// 1 - test // o teste
// 1 - afterEach // depois de cada teste
// 1 - beforeEach // antes de cada teste
// 2 - beforeEach // antes de cada teste dentro do describe
// 2 - test // o teste dentro do describe
// 2 - afterEach // depois de cada teste dentro do describe
// 1 - afterEach // depois de cada teste