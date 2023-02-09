import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
    const d = new Date();
    // console.log(task)
    return (
    <div className='flex justify-between items-center text-dark bg-gray-300 p-2 my-2 text-xl cursor-pointer'>
       <div className='border-2'>
       <h3 className=''>{task.title}</h3>
          <p className='text-sm border-2'>{d.toUTCString()}</p>
       </div>
       <div>
        <FaRegTimesCircle style={{ color: 'red' }} onClick={()=> onDelete(task.id)}/>
       </div>
    </div>
  )
}

export default Task