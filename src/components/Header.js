import React from 'react'
import Button from './Button';

const Header = () => {
    const title = 'TASK TRACKER APP'
  return (
    <div className='flex justify-between mx-auto border-solid border-2 border-sky-500 '>
      <h2 className='text-3xl '>{ title }</h2>
      <Button bgColor='bg-green-500'/>
    </div>
  )
}

export default Header