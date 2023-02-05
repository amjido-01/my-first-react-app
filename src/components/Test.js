import React from 'react'
import Button from './Button'

const Test = ({text, color, onClick}) => {

  return (
    <div >
        <Button text={ text } style={{backgroundColor: color}} onClick={onClick} className='text-{ color }'/>
    </div>
  )
}

export default Test