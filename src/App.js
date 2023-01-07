import './App.css';
import  Lovereact  from './Lovereactjs.js';
import Classcomp from './Classcomp.js';
// import Btn from './components/button';
import StateBtn from './components/BtnState';
import Data from './components/Data';
import CardComponent from './components/card';


function App() {
  return (
    <div className="App">
     {/* <Classcomp title="testing"/> */}
     {/* <Lovereact /> */}
     {/* <AddItems number={2} text="joe"/> */}
     {/* <StateBtn /> */}
     <CardComponent />
     <Data />
    </div>
  );
}

function NoteFunc() {
  const title = "This is my Form";
  const showTitle = true;
  return (
    <div>
      <h2>{ showTitle ? title : "No title yet to display" }</h2>
    </div>
  )
}

function AddItems(props) {
  const labelInfo = "type something here";
  return(
    <form>
      <NoteFunc />
      <label for="form-text">{ labelInfo }</label>
      <p>{props.number}</p>
      <input type="text" id="form-text" value={props.text} />
      {/* <Btn /> */}
    </form>
  )
}

export default App;