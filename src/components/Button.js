import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={ onClick } style={{backgroundColor: color}} class="bg-{ color } hover:bg-green-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      { text }
    </button> 
  )
}

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button