import Gif from "components/Gif";
import './styles.css'

const ListOfGifs = ({ gifs }) => {
  return <div className="ListOfGifs">
    {gifs.map(gif => 
      <Gif className="ListOfGifs-item"
        key={gif.id}
        id={gif.id}
        title={gif.title}
        url={gif.url}
      />
    )}
  </div>
}

export default ListOfGifs