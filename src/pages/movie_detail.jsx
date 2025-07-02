import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "../components/movieCard"
import ReviewCard from "../components/reviewCard"
import ReviewForm from "../components/addReview"
import { useContext } from "react"
import GlobalContext from "../context/globalContext"


function Movie_detail() {
    const [movie, setMovie] = useState()
    const { id } = useParams()


    const { setIsLoading } = useContext(GlobalContext)


    function getMovies() {

        setIsLoading(true)

        axios.get("http://127.0.0.1:3000/movies/" + id)
            .then((res) => {
                setMovie(res.data)

            })
            .catch((error) => console.error("errore durante il caricamento", error))
            .finally(() => setIsLoading(false))
    }

    useEffect(getMovies, [id])





    return (
        <>
            <div className="detail-header">
                <h1 className="detail-title">dettaglio del film: </h1>
            </div>
            <div className="movie-detail-container">

                {movie && <MovieCard movie={movie} />}

            </div>


            <section className="reviews">

                {console.log(movie)}
                {movie && movie.reviews && movie.reviews.map(review => (
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