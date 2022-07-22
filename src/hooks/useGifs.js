import { useContext, useState, useEffect } from "react"
import { getGifsBySearch } from "../services/gifsService"
import GifsContext from '../context/GifsContext'

const useGifs = ({ keyword } = { keyword: '' }) => {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)

        // Elegir keyword para usar en la busqueda
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'trending'

        getGifsBySearch({ keyword: keywordToUse })
            .then(newGifs => {
                setGifs(newGifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword, setGifs])

    return [loading, gifs]
}

export default useGifs