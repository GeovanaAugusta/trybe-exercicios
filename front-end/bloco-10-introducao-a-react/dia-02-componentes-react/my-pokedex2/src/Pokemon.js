import { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
    // const { pokemon: {name, type, index, averageWeight, image} } = this.props; // Sugestão do gabarito, já desestruturar o objeto pokemon, evitando o que fiz abaixo
    const { pokemon } = this.props;
    // console.log(pokemon); // OK, os 9 arrays INDIVIDUALMENTE
    return (
      <div>
        <h1>{pokemon.index}</h1>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        <img className="img" src={pokemon.image} alt={`${pokemon.name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;


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
