const imc = (weight, height) => {
  return parseFloat(weight/(height*height)).toFixed(2)
}
console.log(imc(56, 1.6));