import React from 'react'

const Task = ({task}) => {
    const d = new Date
  return (
    <div className='text-dark bg-gray-300 p-2 my-2 text-xl cursor-pointer'>
        <h3>{task.title}</h3>
        <p className='text-sm'>{d.toUTCString()}</p>
    </div>
  )
}

export default Task