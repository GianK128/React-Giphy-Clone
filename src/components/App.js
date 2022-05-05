import React from 'react'
import './App.css'
import ListOfGifs from './ListOfGifs'

function App() {
  return (
    <div className='App'>
      <ListOfGifs keyword='Programming' />
    </div>
  );
}

export default App;