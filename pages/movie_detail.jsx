import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "../components/movieCard"
import ReviewCard from "../components/reviewCard"


function Movie_detail() {
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    function getMovies() {
        axios.get("http://127.0.0.1:3000/movies/" + id)
            .then((res) => {
                setMovie(res.data)
                setLoading(false)
            })
            .catch((error) => console.error("errore durante il caricamento", error)
            )
    }

    useEffect(getMovies, [id])

    if (loading) {
        return (
            <div>
                caricamento in corso...
            </div>
        )
    }

    return (
        <>
            <div className="detail-header">
                <h1 className="detail-title">dettaglio del film: </h1>
            </div>
            <div className="movie-detail-container">

                <MovieCard movie={movie} />

            </div>

            <div className="reviews">
                {movie.reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>


        </>
    )
}

export default Movie_detail