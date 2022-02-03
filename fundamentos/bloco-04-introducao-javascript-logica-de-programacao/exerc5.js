const obtuso = 110;
const reto = 20;
const agudo = 50;

if (reto + obtuso + agudo == 180){
console.log(true);
}
else if (agudo < 0 || obtuso <0 || reto <0) {
  console.log("Error: invalided angle")
}

else {
  console.log(false)
}