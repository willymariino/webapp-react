import axios from "axios"
import { useState, useEffect } from "react"
import MovieCard from "../components/movieCard"
import { useContext } from "react"
import GlobalContext from "../context/globalContext"


function Movie_list() {
    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    const { setIsLoading } = useContext(GlobalContext)

    const baseUrl = import.meta.env.VITE_API_URL
    const endpoint = `${baseUrl}/movies`


    function fetchMovies() {

        setIsLoading(true)
        setErrorMessage(null)
        axios.get(endpoint)
            .then((res) => setMovies(res.data))
            .catch((error) => console.error("errore durante il caricamento", error))
            .finally(() => setIsLoading(false))
    }

    useEffect(fetchMovies, [])

    return (
        <>
            <h1 className="list-title">Movies List</h1>

            <div className="movie-container">
                {movies.map((movie, index) =>
                    movie ? (
                        <MovieCard key={movie.id || index} movie={movie} />
                    ) : null
                )}
            </div>
        </>
    )
}

export default Movie_list