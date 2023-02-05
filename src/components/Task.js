import React from 'react'

const Task = ({task}) => {
  return (
    <div className='text-green-500 bg-gray-300 p-2 my-2 text-xl'>{task.title}</div>
  )
}

export default Task