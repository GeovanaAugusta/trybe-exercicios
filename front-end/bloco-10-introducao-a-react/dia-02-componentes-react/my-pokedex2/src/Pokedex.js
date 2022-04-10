import { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    // console.log(pokemons); data todo, os 9 arrays
    return (
      <div className="pokedex">
        {pokemons.map((element) => (
          <Pokemon key={element.id} pokemon={element} />
        ))}
      </div>
    );
  }
}

export default Pokedex;

Pokedex.propTypes = {
  pokemons: PropTypes.object.isRequired,
}
