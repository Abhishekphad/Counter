import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  const [counter,setCounter]=React.useState(0);
  return (
    <div className="App" id='parent'>
      <h1>{counter}</h1>
      <div>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
        <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
