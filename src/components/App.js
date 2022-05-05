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
      {gifs.map(gif => {return <>
        <h3>{gif.title}</h3>
        <img key={gif.id} src={gif.url} alt='Gif' />
      </>}
      )}
    </div>
  );
}

export default App;