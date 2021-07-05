import React, { useState } from "react";

function App() {

  const [text, setText] = useState('Hello');

  const onSubmit = () =>{
    alert('submitted');
  };

  const onKeyUp = (event) =>{
    if(event.keyCode === '13'){
      onSubmit();
    }
  }

  // let text = 'Hello';

  const updateText = () =>{
    // text = 'Bye';  
    setText('Bye');
    console.log(text);
  }

  console.log(text);

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>


      <br /><br />

      <span>{text}</span>
      <button onClick={updateText}>Update</button>

    </div>
  );
}

 
export default App;
