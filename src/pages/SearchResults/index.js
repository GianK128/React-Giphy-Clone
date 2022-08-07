import { useCallback, useEffect, useRef } from "react"
import useGifs from "hooks/useGifs"
import Loader from 'components/Loader'
import ListOfGifs from "components/ListOfGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import './styles.css'

export default function SearchResults({ params }) {
    const { keyword } = params
    const {loading, gifs, setPage} = useGifs({ keyword })
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    // useCallback so it doesn't declare the function every time it renders
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

    // Only call this effect when watched or stopped being watched
    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <div className="SearchResults">
        {loading
            ? <Loader />
            : <>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </div>
}