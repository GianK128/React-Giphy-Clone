import React, { useEffect, useState } from 'react'
import './App.css'

const apiKey = "X2cCUSzCUj4KOHDUZBkPTsnrTmzOVOia"
const baseURL = "https://api.giphy.com/v1"

const getGifsSearchService = () => {
  return fetch(`${baseURL}/gifs/search?api_key=${apiKey}&q=panda&limit=10&offset=0&rating=G&lang=es`)
    .then(res => res.json())
    .catch(error => {
      console.log(error)
      return []
    })
}

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    getGifsSearchService()
      .then(response => {
        const {data} = response
        if (Array.isArray(data)) {
          const gifs = data.map(image => image.images.downsized_medium.url)
          setGifs(gifs)
        }
      })
  }, [])

  return (
    <div className='App'>
      {gifs.map(gif => <img key={gif} src={gif} alt='Gif' />)}
    </div>
  );
}

export default App;