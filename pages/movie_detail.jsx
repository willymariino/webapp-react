import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "../components/movieCard"


function Movie_detail() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    function getMovies() {
        axios.get("http://127.0.0.1:3000/movies/" + id)
            .then((res) => {
                setMovie(res.data)
            })
            .catch((error) => console.error("errore durante il caricamento", error)
            )
    }

    useEffect(getMovies, [id])

    return (
        <>
            <h1>dettaglio del film: </h1>
            <MovieCard movie={movie} />
        </>
    )
}

export default Movie_detail