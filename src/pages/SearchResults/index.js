import useGifs from "hooks/useGifs"
import Loader from 'components/Loader'
import ListOfGifs from "components/ListOfGifs"

export default function SearchResults({ params }) {
    const { keyword } = params
    const [loading, gifs] = useGifs({ keyword }) 

    return <>
        {loading
            ? <Loader />
            : <ListOfGifs gifs={gifs} />
        }
    </>
}