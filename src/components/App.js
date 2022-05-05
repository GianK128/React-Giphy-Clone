import React, { useEffect, useState } from 'react'
import { getGifsBySearch } from '../services/gifsService'
import './App.css'

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    getGifsBySearch().then(newGifs => setGifs(newGifs))
  }, [])

  return (
    <div className='App'>
      {gifs.map(gif => <img key={gif} src={gif} alt='Gif' />)}
    </div>
  );
}

export default App;