import React from 'react'


const Tasks = props => {
  return (
    <div>
        { props.tasks.map((task) => (<h2 key={ props.tasks.id }> {props.task.title} </h2>)
        )}
    </div>
  )
}


export default Tasks