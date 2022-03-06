const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701" Note que o parâmetro da função já está sendo passado na chamada da função.


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const address = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  return (`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: R. ${address}, Nº: ${number}, AP: ${apartment}  `)
}

console.log(customerInfo(order));


// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."Modifique o nome da pessoa compradora.Modifique o valor total da compra para R$ 50,00

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let name = order.name;
  name = 'Luiz Silva'
  const pizza = Object.keys(order.order.pizza);
  let drink = (order.order.drinks.coke.type);
  let payment = Object.values(order.payment);
  payment = '50,00';
  return (`Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${payment}`)
}
console.log(orderModifier(order));