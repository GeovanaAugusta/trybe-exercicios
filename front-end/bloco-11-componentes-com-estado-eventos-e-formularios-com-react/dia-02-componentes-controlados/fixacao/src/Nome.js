import React from "react";
import PropTypes from 'prop-types';

class Nome extends React.Component {
  render() {
    const { value, handleChange1 } = this.props;

    let error = undefined;
    if (value.length > 50) error = 'Texto muito grande!'
    return (

      <fieldset>
      <label for="name">Nome</label>
        <input
          onChange={handleChange1}
          name='nome'
          type='text'
          id='name'
          value={value}
        />

       <span style={{color: "red"}}> {error !== undefined ? error : ''} </span> 

       {/* error !== undefined === só error */}
        
        </fieldset>
        )
  }
}

Nome.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange1: PropTypes.func.isRequired,
};

export default Nome;