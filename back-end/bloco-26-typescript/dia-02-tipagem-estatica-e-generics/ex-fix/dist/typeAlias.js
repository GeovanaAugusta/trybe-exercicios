"use strict";
function printCoord(pt) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
printCoord({ x: 100, y: 100 });
function printBird(bd) {
    console.log("O nome do pássaro x é: " + bd.x);
    console.log("O nome do pássaro y é: " + bd.y);
}
printBird({ x: 'Sabiá', y: 'Andorinha' });
function printNumber(nb) {
    console.log(`O valor da soma é: ${nb.x + nb.y}`);
}
printNumber({ x: 100, y: 100 });
function printAddress(add) {
    console.log(`O endereço é:  ${add.publicPlace}, ${add.number}, ${add.district}, ${add.city}, ${add.state}.`);
}
printAddress({ publicPlace: 'Rua June', number: 12, district: 'Camargos', city: 'BH', state: 'MG' });
