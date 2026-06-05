import { Link } from "react-router-dom"

function MovieCard({ movie, variant, variant2 }) {
    return (
        <div className={`card ${variant2}`}>

            <div className="card-image-container">
                <Link to={"movie-detail/" + movie.id}>
                    <img src={movie.image} alt={movie.title} className={`card-image ${variant}`} />
                </Link>
            </div>

            <div className="card-content">
                <h2>{movie.title}</h2>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Year:</strong> {movie.release_year}</p>
                <p>{movie.abstract}</p>
                <p className="card-reviews"><strong>Average reviews: </strong>{movie.media_recensioni || "N.D."}</p>
            </div>

        </div >
    )
}

export default MovieCard