import React from 'react'
import Button from './Button';

const Header = () => {

  const title = 'TASK TRACKER APP'
  const onClick = () => {
    console.log('clicked!')
  }

  return (
    <div className='flex justify-between mx-auto border-solid border-2 border-sky-500 '>
      <h2 className='text-3xl '>{ title }</h2>
      <Button color='#22c55e' text='Add task' onClick={onClick}/>
    </div>
  )
}

export default Header