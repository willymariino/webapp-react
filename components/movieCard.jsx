function MovieCard({ movie }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src="{movie.image}" alt="{movie.title}" className="card-image" />
            </div>

            <div className="card-content">
                <h2>{movie.title}</h2>
                <p><strong>Regista:</strong> {movie.director}</p>
                <p><strong>Genere:</strong> {movie.genre}</p>
                <p><strong>Anno:</strong> {movie.release_year}</p>
                <p>{movie.abstract}</p>
            </div>
        </div>
    )
}

export default MovieCard