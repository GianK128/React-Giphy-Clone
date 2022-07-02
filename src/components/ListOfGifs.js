import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import { getGifsBySearch } from '../services/gifsService'

const ListOfGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    getGifsBySearch({ keyword })
      .then(newGifs => setGifs(newGifs))
  }, [keyword])

  return gifs.map(gif => 
    <Gif 
      key={gif.id}
      id={gif.id}
      title={gif.title}
      url={gif.url}
    />
  )
}

export default ListOfGifs