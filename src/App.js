import React from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';



function App() {
  return (
    <div className="App container border-solid border-2 border-green-600 mx-auto h-64">
      <Header />
      <Tasks />
    </div>
  );
}




export default App;