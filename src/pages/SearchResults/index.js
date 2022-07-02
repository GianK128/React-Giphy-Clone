import ListOfGifs from "../../components/ListOfGifs"

export default function SearchResults({ params }) {
    const { keyword } = params
    return <ListOfGifs keyword={keyword}></ListOfGifs>
}