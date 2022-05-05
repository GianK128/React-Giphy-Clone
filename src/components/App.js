import React, { useEffect, useState } from 'react'
import { getGifsBySearch } from '../services/gifsService'
import './App.css'
import ListOfGifs from './ListOfGifs'

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    getGifsBySearch().then(newGifs => setGifs(newGifs))
  }, [])

  return (
    <div className='App'>
      <ListOfGifs gifs={gifs} />
    </div>
  );
}

export default App;