import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  return (
  <button style={{backgroundColor: color}} class="bg-{ color } hover:bg-green-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
    { text }
  </button>  )
}



export default Button