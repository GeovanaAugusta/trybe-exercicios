// Exercício 3: Crie uma interface que represente uma pizza. Ela deve conter:

// Uma propriedade do tipo string chamada flavor que representa o sabor.
// Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza.
// O número de fatias pode ser 4, 6 ou 8;
// Utilize um type alias para armazenar o tipo dessa propriedade.
// a) Crie uma pizza sabor Calabresa de 8 fatias;

// b) Crie uma pizza sabor Marguerita de 6 fatias;

// c) Crie uma pizza sabor Nutela de 4 fatias.

type Slices  = 4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: Slices
}
const pizza1: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}
console.log(pizza1);

const pizza2: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}
console.log(pizza2);

const pizza3: Pizza = {
  flavor: 'Nutela',
  slices: 4
}
console.log(pizza3);


// Exercício 4: Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:

// Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.
// Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.
// Pizza Doce - seus sabores são “Nutela”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.
// Você deve usar type alias e type unions para criar os possíveis sabores de cada tipo de pizza.

// Agora crie:

// 3 pizzas do tipo comum;
// 2 pizzas do tipo vegetariana;
// 1 pizza do tipo doce.

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelo";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaCommon extends Pizza {
  flavor: Common
}

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);