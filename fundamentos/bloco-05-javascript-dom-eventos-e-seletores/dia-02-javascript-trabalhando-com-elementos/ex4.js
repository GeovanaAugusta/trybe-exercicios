// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let paiDoPai = document.getElementById("pai").children;
console.log(paiDoPai);

let pai = document.getElementById("pai");
console.log(pai);

let first = document.getElementById("primeiroFilho");
pai.removeChild(first);

console.log(paiDoPai);

let removeThirdChild = document.getElementById("pai").lastChild.previousSibling;
console.log(removeThirdChild);

pai.removeChild(removeThirdChild);

// console.log(paiDoPai);

let removeLast = document.getElementById("pai").lastElementChild;
console.log(removeLast);

pai.removeChild(removeLast);

// console.log(paiDoPai);

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById(
  "primeiroFilhoDoFilho"
).nextElementSibling;
console.log(primeiroFilhoDoFilho);

elementoOndeVoceEsta.removeChild(primeiroFilhoDoFilho);
