import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, index, averageWeight, image },
    } = this.props;
    // Fizemos um map no nosso array de pokemons
    // que vai renderizar o componente Pokemon para cada item do array.
    // Então, recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações e renderizamos em uma tag HTML,
    // no caso, utilizamos um <p>.

    return (
      <div className="pokemon">
        <div className="container-pokemon">
          <h2>{name}</h2>
          <br></br> <br></br>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <div className="flexbox">
          <h2 className="text-index">INDEX</h2>
          <br></br>
          <h2 className="index">{index}</h2>
          <img className="img" src={image} alt={`${name} sprite`} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    index: PropTypes.number,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
