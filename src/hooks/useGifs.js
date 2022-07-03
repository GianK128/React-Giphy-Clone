import { useState, useEffect } from "react"
import { getGifsBySearch } from "../services/gifsService"

const useGifs = ({ keyword }) => {
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

    return [loading, gifs]
}

export default useGifs