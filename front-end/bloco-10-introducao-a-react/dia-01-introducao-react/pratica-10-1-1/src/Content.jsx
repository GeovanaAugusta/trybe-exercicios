      import React from 'react';

      const conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composição de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composição de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ]
      class Content extends React.Component {
        render() {
          return(
            <div className="content">
              {conteudos.map((element) => (
                <div key={element.conteudo} className="card">
                  <h4>{`O conteudo é: ${element.conteudo}`}</h4>
                  <p>{`status: ${element.status}`}</p>
                  <p>{`bloco: ${element.bloco}`}</p>
                </div>
              ))}
            </div>
          );
        }
      }

      export default Content;



// //  https://stackoverflow.com/questions/71228644/is-it-possible-to-make-the-key-of-an-object-more-than-one-word key com mais de uma palavra