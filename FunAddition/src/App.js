import React from 'react';
import './App.css';
import NumberInput from './NumberInput';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <NumberInput
          initialValue='2'
        />
        <p className='Text'>+</p>
        <NumberInput
          initialValue='2'
        />
        <p className='Text'>=</p>
        <NumberInput
          initialValue='4'
        />
      </div>
    </div>
  );
}

export default App;