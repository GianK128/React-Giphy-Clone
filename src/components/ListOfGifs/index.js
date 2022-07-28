import Gif from "components/Gif";
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {
  return <div className="App-ListOfGifs">
    {gifs.map(gif => 
      <Gif 
        key={gif.id}
        id={gif.id}
        title={gif.title}
        url={gif.url}
      />
    )}
  </div>
}

export default ListOfGifs