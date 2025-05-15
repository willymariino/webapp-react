import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "../components/movieCard"
import ReviewCard from "../components/reviewCard"
import ReviewForm from "../components/addReview"
import { useContext } from "react"
import countContext from "../context/globalCotext"


function Movie_detail() {
    const [movie, setMovie] = useState(null)
    //  const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const { setIsLoading } = useContext(countContext)


    function getMovies() {
        setIsLoading(true)
        axios.get("http://127.0.0.1:3000/movies/" + id)
            .then((res) => {
                setMovie(res.data)
                // setLoading(false)
            })
            .catch((error) => console.error("errore durante il caricamento", error))
            .finally(() => setIsLoading(false))
    }

    useEffect(getMovies, [id])

    // if (loading) {
    //     return (
    //         <div>
    //             caricamento in corso...
    //         </div>
    //     )
    // }

    return (
        <>
            <div className="detail-header">
                <h1 className="detail-title">dettaglio del film: </h1>
            </div>
            <div className="movie-detail-container">

                <MovieCard movie={movie} />

            </div>

            <section className="reviews">
                {movie.reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </section>

            <section className="add-review">
                <ReviewForm movie_id={id} refreshMovie={getMovies} />
            </section>


        </>
    )
}

export default Movie_detail