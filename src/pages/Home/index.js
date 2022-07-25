import { useState } from "react"
import { useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs"
import Loader from "../../components/Loader"
import useGifs from "../../hooks/useGifs"

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [location, pushLocation] = useLocation()
    const [loading, gifs] = useGifs()
    
    console.log(location)

    const HandleChange = () => (event) => {
        setKeyword(event.target.value)
    }

    const HandleSubmit = () => (event) => {
        event.preventDefault()
        if (keyword !== '') {
            pushLocation(`/search/${keyword}`)
        }
    }

    return <>
        <h1>Giphy Clone</h1>
        <h3>Buscar</h3>
        <form onSubmit={HandleSubmit()}>
            <input type='text' value={keyword} onChange={HandleChange()} />
        </form>
        {loading
            ? <Loader />
            : <ListOfGifs gifs={gifs} />
        }
    </>
}