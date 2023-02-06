import React from 'react'
// import { Fatimes } from '@fortawesome/fontawesome-svg-core'
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task }) => {
    const d = new Date();
  return (
    <div className='text-dark bg-gray-300 p-2 my-2 text-xl cursor-pointer'>
        <h3>{task.title}</h3>
       <div className='flex'>
            <p className='text-sm'>{d.toUTCString()}</p>
            <faTimes style={{ color: 'red' }}/>
       </div>
    </div>
  )
}

export default Task