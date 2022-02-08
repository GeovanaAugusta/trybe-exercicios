// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
    let outroPersonagem = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

// Opção 1:

console.log(info.personagem + ' e ' + outroPersonagem.personagem);
console.log(info.origem + ' e ' + outroPersonagem.origem);
console.log(info.nota + ' e ' + outroPersonagem.nota);
console.log('Ambos recorrentes');

// Opção 2, usa o for in para acessar as propriedades do objeto, depois usa o if para acessar especificamente a propriedade recorrrente com 3 condições: se for a propriedade recorrente e ela tiver o valor de Sim no 1° objeto e o outro objeto também tiver valor de Sim para a propriedade recorrente, deve-se adicionar Ambos recorrentes. E o else para para imprimir cada um dos valores das propriedades de ambos os objetos com um "e" e concatenadas "+".

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    outroPersonagem[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + outroPersonagem[properties]);
  }
}