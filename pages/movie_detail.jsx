import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "../components/movieCard"


function Movie_detail() {
    const [movies, setMovies] = useState()
    const { id } = useParams()

    function getMovies() {
        axios.get("http://127.0.0.1:3000/movies/" + id)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((error) => console.error("errore durante il caricamento", error)
            )
    }

    useEffect(getMovies, [id])

    return (
        <>
            <MovieCard />
        </>
    )
}

export default Movie_detail