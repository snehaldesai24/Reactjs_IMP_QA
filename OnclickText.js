//Make an react appthat changes default displayed text to my name onclick

import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("Default Text");

  const handleClick = () => {
    setText("Your Name"); // Replace "Your Name" with your actual name
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}

export default App;
