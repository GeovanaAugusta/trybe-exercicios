let salarioBruto = 2500;
let aliq1 = (8/100 * salarioBruto);
let aliq2 = (9/100* salarioBruto);
let aliq3 = (11/100* salarioBruto);
let aliq4 = 570.88;
let salarioLiquido = "";
let salarioBase = "";

// INSS 

if (salarioBruto < 1556.94) {
  salarioBase = salarioBruto - aliq1;
    }

else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
salarioBase = salarioBruto - aliq2;
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - aliq3;
      }

else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - aliq4;
    }
console.log("Salário-base é:", salarioBase)

// IR

if (salarioBase <=  1903.98) {
  salarioLiquido = salarioBase;
    }

else if (salarioBase >=  1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - ((7.5/100) * salarioBase - (142.80));
  }

else if (salarioBase >=  2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - ((15/100) * salarioBase - (354.80));
  }

else if (salarioBase >=  3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - ((22.5/100) * salarioBase - (636.13));
  }

else if (salarioBase >  4664.68) {
  salarioLiquido = salarioBase - ((27.5/100) * salarioBase - (869.36));
  }

console.log("Salário liquido é:", salarioLiquido);  
