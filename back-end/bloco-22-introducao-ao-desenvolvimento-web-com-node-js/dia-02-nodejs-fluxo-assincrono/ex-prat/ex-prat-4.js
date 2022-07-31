// 4 Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const { log } = require('console');

const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

function readAll() {
fs.readFile(nomeDoArquivo, 'utf8')
  .then((fileContent) => {
    const simpsons = JSON.parse(fileContent);
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    
      strings.forEach((string) => console.log(string));
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });
}


  // Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

  async function checkId(idUser) {
    const fileContent = await fs
    .readFile(nomeDoArquivo, 'utf-8');
        const simpsons = JSON.parse(fileContent);
          const filterId = simpsons.find(({ id }) => Number(id) == idUser);
        
   
  if (!filterId) {
//     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
//      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
//      * tendo como motivo o que passarmos para o `throw`.
//      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'
//      */
    throw new Error('id não encontrado');
  }
  return filterId;
    }
    



// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.


async function exercisefilter() {
  const fileContent = await fs
  .readFile(nomeDoArquivo, 'utf-8');
      const simpsons = JSON.parse(fileContent);
        const filterId = simpsons.filter(({ id }) => Number(id) !== 10 && Number(id) !== 6);
        console.log(filterId);
      
        await fs.writeFile(nomeDoArquivo, JSON.stringify(filterId));
  }



// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }


// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

  // Sem a main, não consigo ver o output
    function main() {
      readAll();
      checkId(1)
      .then((simpson) => console.log(simpson));
      // exercisefilter(); // Chamando aqui muda o simpsons.json pro filtrado
      createSimpsonsFamily();
      // addNelsonToFamily(); // Ou adiciona, ou remove
      replaceNelson();
    }
    
    main();