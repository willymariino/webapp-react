import { Link } from "react-router-dom"

function MovieCard({ movie }) {
    return (
        <div className="card">

            <div className="card-image">
                <Link to={"movie-detail/" + movie.id}>
                    <img src={movie.image} alt={movie.title} className="card-image" />
                </Link>
            </div>

            <div className="card-content">
                <h2>{movie.title}</h2>
                <p><strong>Regista:</strong> {movie.director}</p>
                <p><strong>Genere:</strong> {movie.genre}</p>
                <p><strong>Anno:</strong> {movie.release_year}</p>
                <p>{movie.abstract}</p>
                <p><strong>Media recensioni: </strong>{movie.media_recensioni || "N.D."}</p>
            </div>

        </div >
    )
}

export default MovieCard