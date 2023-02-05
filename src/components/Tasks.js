import React from 'react'
import Task from './Task'


const Tasks = ({ tasks }) => {
  return (
    <div>
        { tasks.map((task) => (
            <Task key={ task.id } className='text-green-500 bg-gray-300 p-2 my-2 text-xl' task={tasks} />
        )
        )}
    </div>
  )
}


export default Tasks