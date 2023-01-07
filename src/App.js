import './App.css';
import Data from './components/Data';
import { PropsExample } from './components/PropsExample';
import Clock from './components/Clock';
import { useEffect, useState } from 'react';
// import Card from './components/Card';


const useTime = () => {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => clearInterval(id)
  }, []);
  return time;
}

function App() {
  
  return (
    <div className="App">
     {/* <Card /> */}

      {/* display data component */}
     <Data />
     < PropsExample name='@alajido_01' 
        person = {{
          firstName: 'Abubakar',
          age: 23,
          color: 'green'
        }} 
      />

      {/* clock component */}
      <Clock color={ color } time={ time.toLocaleTimeString() } />

    </div>
  );
}



export default App;