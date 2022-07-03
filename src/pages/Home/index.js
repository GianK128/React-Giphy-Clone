import { useState } from "react"
import { useLocation } from "wouter"

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [location, pushLocation] = useLocation()
    
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
    </>
}