import React from 'react'


const Tasks = ({ tasks }) => {
  return (
    <div>
        { tasks.map((task) => (
            <h3 key={ task.id } className='text-green-500 bg-gray-300 p-2 my-2 text-xl' > { task.title } </h3>
        )
        )}
    </div>
  )
}

// 

export default Tasks