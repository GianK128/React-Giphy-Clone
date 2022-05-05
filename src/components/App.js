import React from 'react'
import './App.css'
import ListOfGifs from './ListOfGifs'
import { Route } from 'wouter'

function App() {
  return (
    <div className='App'>
      <Route path='/gifs/:keyword' component={ListOfGifs}/>
    </div>
  );
}

export default App;