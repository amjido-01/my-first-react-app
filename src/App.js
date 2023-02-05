import React from 'react';
import './App.css';
import Header from './components/Header'
import Test from './components/Test';




function App() {
  const onClick = () => {
    console.log('testing')
  }
  return (
    <div className="App container border-solid border-2 border-green-600 mx-auto h-64">
      <Header />
      <Test text='test' color='#ca8a04' onClick={onClick}/>
    </div>
  );
}




export default App;