// EVITAR ISSO:
// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!
// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!