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
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Task two",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Task three",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
])
  return (
    <div className="App container border-solid border-2 w-[50%] border-green-600 mx-auto h-auto">
      <Header />
      <Tasks tasks={ tasks }/>
    </div>
  );
}



export default App;