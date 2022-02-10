

// Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName;

// Altere algum estilo do primeiro deles.

const estilo = document.getElementsByClassName("parag");
estilo[0].style.background = "blue";
estilo[0].style.fontSize = "19px"


// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName. Sempre colocar a posição, já que normalmente retornará VÁRIOS elementos

const subti = document.getElementsByTagName('h4')[0];
subti.style.color = "blue"

