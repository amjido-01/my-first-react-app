import './App.css';
import Data from './components/Data';
import { PropsExample } from './components/PropsExample';
// import Card from './components/Card';


function App() {
  return (
    <div className="App">
     {/* <Card /> */}
     <Data />
     < PropsExample name='@alajido_01' person = {{
        firstName: 'Abubakar',
        age: 23
     }} />
    </div>
  );
}



export default App;