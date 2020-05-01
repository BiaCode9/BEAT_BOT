import React from 'react';

const Button = (props) => (
  <button className="button" style={props.style}>
    {props.label}
  </button>
)

export default Button;