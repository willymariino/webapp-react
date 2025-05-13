import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function Movie_detail() {
    const [movies, setMovies] = useState()
    const { id } = useParams()

    return (
        <>
            <h1>dettaglio movie</h1>
        </>
    )
}

export default Movie_detail