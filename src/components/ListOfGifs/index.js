import Gif from "components/Gif";
import './styles.css'

const ListOfGifs = ({ gifs }) => {
  return <div className="ListOfGifs">
    {gifs.map(gif => 
      <div className="ListOfGifs-item" key={gif.id}>
        <Gif
          id={gif.id}
          title={gif.title}
          url={gif.url}
        />
      </div>
    )}
  </div>
}

export default ListOfGifs