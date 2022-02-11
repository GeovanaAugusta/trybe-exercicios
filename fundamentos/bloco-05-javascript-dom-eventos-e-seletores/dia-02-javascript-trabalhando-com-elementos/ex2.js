// 1- Acesse o elemento elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta)

// 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. parentElement : retorna o elemento pai.

let pai = document.getElementById("elementoOndeVoceEsta").parentElement;
console.log(pai);
pai.style.color = "red";

// 3- Acesse o *primeiroFilhoDoFilho* e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 

let textAdd = document.getElementById("primeiroFilhoDoFilho");
textAdd.innerText = "Teste!"

console.log(textAdd)

// 4 Acesse o *primeiroFilho* a partir de pai. firstElementChild : retorna o primeiro elemento filho, e não próximo filho nó.

let nextElement = document.getElementById("pai").firstElementChild;
console.log(nextElement);

// 5 Agora acesse o *primeiroFilho* a partir de elementoOndeVoceEsta. previousElementSibling : retorna o elemento anterior.
 

let firstChildd = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
console.log(firstChildd);

// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. nextSibling : retorna o próximo nó.

let text = document.getElementById("elementoOndeVoceEsta").nextSibling;
console.log(text)


// 7- Agora acesse o *terceiroFilho* a partir de elementoOndeVoceEsta. nextElementSibling : retorna o próximo elemento

let thirdChild = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
console.log(thirdChild);

// 8- Agora acesse o *terceiroFilho* a partir de pai.lastElementChild : retorna o último elemento filho.previousElementSibling : retorna o elemento anterior.

let thirdChildd = document.getElementById("pai").lastElementChild.previousElementSibling;
console.log(thirdChildd);