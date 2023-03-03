import React, {useState} from 'react';
import './App.css';
import Skill from './Skills';
import Introduction from './Introduction';


function App() {
  const [On, setOn]= useState (false);
console.log('active', On);
  const[number,setNumber] =  useState(0)
  console.log('helooo',number);

  const handleClick = () => {
    setOn(!On);
    setNumber(number+1);

 } 
  return (
    <div className="App">
      <button onClick={handleClick}> click this</button>
      <h1 className={On ? 'On': 'setOn'}>hello! this is chnaging file</h1>
      < Introduction propsCount={number} />
      < Skill/>
    </div>
  )
}

export default App;
