import axios from "axios"
import { useState, useEffect } from "react"
import MovieCard from "../components/movieCard"

function Movie_list() {
    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get("http://127.0.0.1:3000/movies")
            .then((res) => setMovies(res.data))
            .catch((error) => console.error("errore durante il caricamento", error))
    }

    useEffect(fetchMovies, [])

    return (
        <>
            <h1>lista dei movies</h1>

            <div className="movie-container">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}


            </div>
        </>
    )
}

export default Movie_list