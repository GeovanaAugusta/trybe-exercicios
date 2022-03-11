const persons = [{
        firstName: 'Maria',
        lastName: 'Ferreira'
    },
    {
        firstName: 'João',
        lastName: 'Silva'
    },
    {
        firstName: 'Antonio',
        lastName: 'Cabral'
    },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames);



// Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers);
console.log(numbers);




//  Unir dois arrays para criar um novo. 

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => ({
    [product]: listPrices[index]
}));

const listProducts = updateProducts(products, prices);
console.log(listProducts);