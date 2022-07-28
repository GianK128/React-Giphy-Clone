import { useContext, useState, useEffect } from "react"
import { getGifsBySearch } from "services/gifsService"
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

const useGifs = ({ keyword } = { keyword: '' }) => {
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)

    // Pick keyword to use
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'trending'

    // Keyword loading
    useEffect(() => {
        setLoading(true)

        getGifsBySearch({ keyword: keywordToUse })
            .then(newGifs => {
                setGifs(newGifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keywordToUse, setGifs])

    // Pagination
    useEffect(() => {
        if (page === INITIAL_PAGE) return

        setLoadingPage(true)

        // Add new gifs to the end
        getGifsBySearch({ keyword: keywordToUse, page })
            .then(newGifs => {
                setGifs(prevGifs => prevGifs.concat(newGifs))
                setLoadingPage(false)
            })
    }, [keywordToUse, setGifs, page])

    return {loading, gifs, loadingPage, setPage}
}

export default useGifs