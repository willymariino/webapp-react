import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const [movies, setMovies] = useState
const { id } = useParams()


function Movie_detail() {


    return (
        <>
            <h1>dettaglio movie</h1>
        </>
    )
}

export default Movie_detail