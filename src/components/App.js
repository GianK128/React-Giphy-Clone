import React, { useEffect, useState } from 'react'
import { getGifsBySearch } from '../services/gifsService'
import './App.css'
import Gif from './Gif'

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    getGifsBySearch().then(newGifs => setGifs(newGifs))
  }, [])

  return (
    <div className='App'>
      {gifs.map(gif => 
        <Gif 
          key={gif.id}
          id={gif.id}
          title={gif.title}
          url={gif.url}
        />
      )}
    </div>
  );
}

export default App;