import React, { useEffect, useState} from "react";
import Counter from './components/Counter';

function App() {

  const [buttonName, setButtonName] = useState('클릭');
  const clickButton = () =>{
    setButtonName('click');
  };

  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      <Counter click ="click1"/>
      <Counter click = {buttonName}/>
      <Counter />
      <button onClick ={clickButton}>Click</button>
    </div>
  );
}
 
export default App;
