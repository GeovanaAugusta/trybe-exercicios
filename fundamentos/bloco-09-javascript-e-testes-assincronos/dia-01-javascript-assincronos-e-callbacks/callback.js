// Declaramos nossa variável de despesas
const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  // Declaramos nossa renda
  const renda = 1000;
  
  const despesaMensal = (renda, despesas, callback) => {
    // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
    // que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
    // Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };
  
  // Definimos nossa função que será passada como parâmetro
  // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
  const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
  
  // Executamos a função principal com as variáveis renda, despesas
  // e a nossa função somaDespesas
  // callback = somaDespesas
  despesaMensal(renda, despesas, somaDespesas);
  
  // Balanço do mês:
  //     Recebido: R$1000,00
  //     Gasto: R$459,00
  //     Saldo: R$541,00



//   Em síntese o que fizemos foi:
// 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback .
// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.
// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.