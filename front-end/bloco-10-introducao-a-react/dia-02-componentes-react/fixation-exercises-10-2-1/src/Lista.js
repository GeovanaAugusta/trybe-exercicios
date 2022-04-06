import React from 'react';

class Lista extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      console.log("item: ", item);
      return (<li key={ index }>{ item }</li>);
    //  Mas não é recomendado o uso de índices como keys em listas que possibilitam a alteração na ordem dos itens , pois pode impactar negativamente o desempenho da aplicação ou gerar problemas relacionados ao estado do componente
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default Lista;

// Para renderizar múltiplos componentes de forma dinâmica