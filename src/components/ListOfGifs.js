import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
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