function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// 
// Elementos que serão inseridos no li
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function classLi(classes) {

let containerUL = document.getElementById('days'); // Quem vai receber filho, primeiro busco

for (let index = 0; index < dezDaysList.length; index +=1) { 
  // for para inserir todos os números nesse elemento lista a ser criado logo abaixo
let tagLi = document.createElement('li'); // O elemento a ser criado - lista para ser filho do ul
containerUL.appendChild(tagLi); // Depois de ter buscado quem receberá os filhos, adiciono filhos
tagLi.innerHTML = dezDaysList[index];
tagLi.className = 'day'; // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
tagLi.className = 'day holiday'; 

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</>li

} else if (dezDaysList[index] === 25) {
  tagLi.className = 'day holiday friday';
  
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

} else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
tagLi.className = 'day friday'; 
}

// console.log(tagLi); só usei pra verificar
}
}
classLi();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

function buttonsHolidays(tagHoli) {
let elementButton = document.createElement('button'); // Criar o elemento botão
let localBottom = document.querySelector('.buttons-container'); // Onde será armazenado, o caminho de acesso
localBottom.appendChild(elementButton); // Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
elementButton.innerHTML = tagHoli; // Texto que estará dentro do botão
elementButton.id = 'btn-holiday'; // Adicione a este botão a ID "btn-holiday".

};
buttonsHolidays('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

function clicker () {
let localClick = document.getElementById('btn-holiday'); // Caminho de onde será armazenado o click;
let localHoliday = document.querySelectorAll('.holiday'); // Os dias que vão ser mudados de cor com a classe holiday
let newBackground = 'rgb(238,238,238)'; // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let initialColor = 'white';

localClick.addEventListener('click', function() {
for (let index = 0; localHoliday.length; index += 1) {
  if (localHoliday[index].style.backgroundColor === initialColor) {
localHoliday[index].style.backgroundColor = newBackground;
  } else {
localHoliday[index].style.backgroundColor = initialColor;   // Estabelece a lógica inversa, se clicado novamente, retorna a cor inicial.
  }
}
})
};
clicker();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function friday(string) {

let createButtom = document.createElement('button'); // Criar o botão
createButtom.id = 'btn-friday'; // Adicione a este botão o ID "btn-friday" .
let dadButtom = document.querySelector('.buttons-container');
dadButtom.appendChild(createButtom); // Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
createButtom.innerHTML = string;

}
friday('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

function clicker2(arrayFridays) {
let localClick = document.querySelector('#btn-friday')
// Caminho de onde o evento click será inserido que é no botão
let localFriday = document.getElementsByClassName('friday'); // Onde será modificado que é toda sexta que tem classe friday


localClick.addEventListener('click', function() { // Criar evento click
 for (let index = 0; index < localFriday.length; index += 1) {

if (localFriday[index].innerText !== 'Sextou') {
localFriday[index].innerHTML = 'Sextou';
} else {
// else sempre pra fazer o contrário, cliquei apareceu o pedido no if, descliquei aparece o que eu pedir no else
localFriday[index].innerHTML = arrayFridays[index];
} 
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
}
})
};
clicker2([4, 11, 18, 25]);


// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function moreZoom() {
let day = document.getElementById('days');// Onde o evento zoom ocorrerá
day.addEventListener('mouseover', function (event) { // Evento a ser criado que é o de mouseover no local onde ele acontecerá que é no days
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '550';
})
}

function comeNormal() {
let days = document.getElementById('days'); // Onde ocorrerá tudo
days.addEventListener('mouseout', function(event) { // Criando o evento propriamente dito onde ele ocorrerá que é no days
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
// Uso do event.target por ele não permitir que seja disparado o evento até atingir todo o body, mostra a propagação no item
})
}
moreZoom();
comeNormal();

// 7 Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

function addTask(task) {

 let spanTag = document.createElement('span');
// Elemento span para receber todos os input
spanTag.innerHTML = task; // Garantia de que a cada valor inserido, a tag span pegará seu valor, criando assim, tags span com o valor digitado pelo usuário
let dadTag = document.querySelector('.my-tasks');
dadTag.appendChild(spanTag);
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

}
addTask('Projeto');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

function legend () {

let tagDiv = document.createElement('div'); 
tagDiv.className = 'task'; // Criar elemento div requerido, com a classe task.
let dadDiv = document.querySelector('.my-tasks');
dadDiv.appendChild(tagDiv); // Resgatei a div com classe requerida e coloquei a tag criada como filha dela. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
tagDiv.style.backgroundColor = 'green' ; // A cor que será inserida na div// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

}
legend();

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

function eventClicker() {
let tagDiv = document.querySelector('.task'); // Busquei a tag que é onde o evento ocorrerá
tagDiv.addEventListener('click', function() { // Criei o evento click e atribui ele a tag
let initialClass = 'task';
// console.log('clique'); console.log(tagDiv);
// pra fins de confirmação sobre o evento estar funcionando
if (tagDiv.className === initialClass) {  // Dei condições para que, se ao clicar a classe da tag fosse task, mudar pra task selected
tagDiv.className = 'task selected';
} else {
  tagDiv.className = 'task';// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
  

}
})
}
eventClicker();

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

function addColor () {
let localDay = document.getElementById('days'); // Caminho dos dias
let tagDiv = document.querySelector('.task');
let divColor = tagDiv.style.backgroundColor; // Caminho da tag div para buscar sua cor
let tagSelected = document.getElementsByClassName('task selected');

localDay.addEventListener('click', function(event){  
console.log('clicada');

// for (let index = 0; index < localDay.length; index += 1) {
if (localDay.style.color !== divColor) {
event.target.style.color = divColor;  
} 
else if (localDay.style.color === divColor) {
event.target.style.color = 'rgb(119,119,119)';
}
})
}
addColor();
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .


