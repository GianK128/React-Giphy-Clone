import useGifs from "hooks/useGifs"
import Loader from 'components/Loader'
import ListOfGifs from "components/ListOfGifs"
import './styles.css'

export default function SearchResults({ params }) {
    const { keyword } = params
    const {loading, gifs, setPage} = useGifs({ keyword }) 

    const handleClick = () => setPage(prevPage => prevPage + 1)

    return <div className="SearchResults">
        {loading
            ? <Loader />
            : <ListOfGifs gifs={gifs} />
        }
        <button onClick={handleClick}>Next page</button>
    </div>
}