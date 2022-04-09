import React from "react";
import PropTypes from 'prop-types';

class Email extends React.Component {
  render() {
    const { value, handleChange1 } = this.props;

    let error = undefined;
    if (value.length > 20) error = 'Texto muito grande!'
    return (

      <fieldset>
      <label for="email">Email</label>
      <input
      onChange={handleChange1}
      name='email'
      value={value}
      id='email'
      />
  
       <span style={{color: "red"}}> {error !== undefined ? error : ''} </span> 

       {/* error !== undefined === só error */}
       </fieldset>
        )
  }
}

Email.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange1: PropTypes.func.isRequired,
};


export default Email;

