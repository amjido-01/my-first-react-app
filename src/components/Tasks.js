import React from 'react'
import Task from './Task'


const Tasks = ({ tasks, onDelete, onSetReminder}) => {
  // console.log(tasks)
  return (
    <div>
        { 
          tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={ onDelete } onSetReminder={ onSetReminder }/>
          ))
        }

    </div>
  )
}

// 

export default Tasks