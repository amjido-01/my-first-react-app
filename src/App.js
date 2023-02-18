import React from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "Task one",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et",
      "reminder" : true
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Task two",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae",
      "reminder": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Task three",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut",
      "reminder": true
    },
  ])


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const setReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App container w-[50%] mx-auto h-fit">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={ tasks } onDelete={ deleteTask } onSetReminder={ setReminder } /> : "No Task To Display" }
    </div>
  );
}



export default App;