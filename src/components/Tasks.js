import React from 'react'
import Task from './Task'


const Tasks = ({ tasks }) => {
  return (
    <div>
        { tasks.map((task) => (
            // <h3 key={ task.id } className='text-green-500 bg-gray-300 p-2 my-2 text-xl'> { task.title } </h3>
         <Task key={task.id} task={task}/>

        )
        )}

    </div>
  )
}

// 

export default Tasks