// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.


// Cor de fundo da tela;
window.onload = function() {
function back() {
    let local = document.getElementById('green'); 
        // Primeiro onde acontecerá o evento de click para mudar cor
    // console.log(localClick); verificação se o local do click funciona
    local.addEventListener('click', function () {
    console.log('clicou'); 
    body.style.backgroundColor = 'green';
    // Condições para mudança de cor
    localStorage.setItem('backgroundColor', 'green')
     })
    } 
back()

function backk() {
    let bluee = document.getElementById('blue');
    bluee.addEventListener('click', function() {
        body.style.backgroundColor = 'blue';
        localStorage.setItem('backgroundColor', 'blue')
})
}
backk()

function backWhi() {
let whitee = document.getElementById('white');
whitee.addEventListener('click', function() {
    body.style.backgroundColor = 'white';
        localStorage.setItem('backgroundColor', 'white')
})
}
backWhi();

let saved = localStorage.getItem('backgroundColor');
// console.log(saved); confirmar se foi salvo
document.body.style.backgroundColor = saved;
// Pra de fato salvar precisa declarar essa let, com a key.

// Cor do texto;
function selec() {
    let select = document.querySelector('select');
    // console.log(select); confirmar que puxei o certo
     select.addEventListener('change', function(){
         let selected = select.selectedOptions[0];
let main = document.querySelector('main');      
main.style.color = selected.value;
  localStorage.setItem('color', selected.value);
    })
}
selec();

let savedColor = localStorage.getItem('color');
// console.log(savedColor); confirmar que foi salva
let main = document.querySelector('main');      
main.style.color = savedColor;

// Tamanho da fonte;
function size() {
    let inputSize = document.querySelector('input[name="font-size"]');
    console.log(inputSize);
    inputSize.addEventListener('change', function(){
    console.log(inputSize.value);
    let main = document.querySelector('main');      
main.style.fontSize = `${inputSize.value}px`;
localStorage.setItem('font-size',`${inputSize.value}px`);    
})
}
size();

let savedSize = localStorage.getItem('font-size');
// console.log(savedColor); confirmar que foi salva  
let maiin = document.querySelector('main');
maiin.style.fontSize = savedSize;

// Espaçamento entre as linhas do texto;

function line() {
    let inputLine = document.querySelector('input[name="line-height"]');
    console.log(inputLine);
    inputLine.addEventListener('change', function(){
    // console.log(inputLine.value); Ver o valor digitado
    let main = document.querySelector('main');      
main.style.lineHeight = `${inputLine.value}px`;
localStorage.setItem('line-height',`${inputLine.value}px`);    
})
}
line();

let savedLine = localStorage.getItem('line-height');
// console.log(savedLine); confirmar que foi salva  
main.style.lineHeight = savedLine;


// Tipo da fonte ( Font family).

function font() {
let arial = document.querySelector('#arial');
console.log(arial);
arial.addEventListener('click', function(){
    console.log('clique')
    arial.style.fontFamily = 'Arial';
    localStorage.setItem('font-family', 'Arial')
})
}
font();

function fonts() {
let time = document.querySelector('#tnr');
console.log(time);
time.addEventListener('click', function(){
    console.log('clique')
    time.style.fontFamily = 'Times New Roman';
    localStorage.setItem('font-family', 'Times New Roman')
})
}
fonts();

let savedFamily = localStorage.getItem('font-family');
main.style.fontFamily = savedFamily;
}

// só no f5 aparece a mudança, por

