// Acesse o elemento elementoOndeVoceEsta.

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta)

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. -->

let pai = document.getElementById("elementoOndeVoceEsta").parentNode;
console.log(pai);
let colorDad = document.getElementById("pai").style.color = "red"

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? -->

let textAdd = document.getElementById("primeiroFilhoDoFilho");
textAdd.innerText = "Teste!"

console.log(document.getElementById("primeiroFilhoDoFilho"))

// Acesse o primeiroFilho a partir de pai.

let nextElement = document.getElementById("pai").firstChild;
console.log(nextElement);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

let lastChild = document.getElementById("elementoOndeVoceEsta").previousSibling;
console.log(lastChild);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.


// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.


//  Agora acesse o terceiroFilho a partir de pai 