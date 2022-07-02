import { useEffect, useState } from "react"
import Loader from '../../components/Loader'
import ListOfGifs from "../../components/ListOfGifs"
import { getGifsBySearch } from "../../services/gifsService"

export default function SearchResults({ params }) {
    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifsBySearch({ keyword })
            .then(newGifs => {
                setGifs(newGifs)
                setLoading(false)
            })
    }, [keyword])

    return <>
        {loading
            ? <Loader />
            : <ListOfGifs gifs={gifs} />
        }
    </>
}