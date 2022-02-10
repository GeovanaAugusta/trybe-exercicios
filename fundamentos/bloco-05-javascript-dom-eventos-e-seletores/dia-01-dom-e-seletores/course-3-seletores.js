const verdeTrybe = document.querySelector("h1");
verdeTrybe.style.backgroundColor = "rgb(0, 176, 105)";
verdeTrybe.style.height = "60px"
verdeTrybe.style.marginTop = "-20px"


const backPink = document.getElementsByClassName("emergency-tasks");
backPink[0].style.backgroundColor = "#FF999B";

const blackPurple = document.getElementsByClassName("pink");
for (let index = 0; index < blackPurple.length; index += 1) {
blackPurple[index].style.backgroundColor = "purple"; 
}

const backYellow = document.getElementsByClassName("no-emergency-tasks");
backYellow[0].style.backgroundColor = "#F5E551";

const backBlack = document.getElementsByClassName("black");
for (let index = 0; index < backBlack.length; index += 1) {
backBlack[index].style.backgroundColor = "black";
}


const backFoot = document.getElementById("footer-container");
backFoot.style.backgroundColor = "rgb(0, 53, 51)";
