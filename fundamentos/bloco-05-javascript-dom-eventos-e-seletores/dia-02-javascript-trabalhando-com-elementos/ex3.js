// Crie um irmão para elementoOndeVoceEsta.

let container = document.getElementById("elementoOndeVoceEsta");
console.log(container);

let creatBrother = document.createElement("section");
console.log(creatBrother);

// Crie um filho para elementoOndeVoceEsta .

let creatChild = document.createElement("section");
console.log(creatChild);
container.appendChild(creatChild);

// Crie um filho para primeiroFilhoDoFilho.

let container2 = document.getElementById("primeiroFilhoDoFilho");
console.log(container2);

let childOfFirstChild = document.createElement("section");
console.log(childOfFirstChild);

container2.appendChild(childOfFirstChild);

// A partir desse filho criado, acesse *terceiroFilho*.

let thirdChi =
  childOfFirstChild.parentElement.parentElement.parentElement.lastElementChild
    .previousElementSibling;
console.log(thirdChi);
