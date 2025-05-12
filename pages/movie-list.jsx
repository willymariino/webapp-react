import axios from "axios"
import { useState, useEffect } from "react"

function Movie_list() {
    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get("http://127.0.0.1:3000/movies")
            .then((res) => setMovies(res.data.results))
            .catch((error) => console.error("errore durante il caricamento", error))
    }

    useEffect(fetchMovies, [])

    return (
        <>
            <h1>lista dei movies</h1>
        </>
    )
}

export default Movie_list