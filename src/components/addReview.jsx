import axios from "axios"
import { useState } from "react"
function ReviewForm({ movie_id, refreshMovie }) {

    const initialValues = {
        name: "",
        text: "",
        vote: 1
    }

    const baseUrl = import.meta.env.VITE_API_URL || "https://webapp-express.onrender.com";
    const endpoint = `${baseUrl}/movies/${movie_id}/reviews`;

    const [formData, setFormData] = useState(initialValues)

    const handleFormData = (e) => {
        const { name, value } = e.target
        console.log("voglio modificare questo campo")
        let currentValue = value

        if (name === 'vote') {
            currentValue = parseInt(value)
        }


        setFormData((formData) => ({
            ...formData,
            [name]: currentValue
        }))
    }

    const sendData = (e) => {
        e.preventDefault()

        console.log(formData)
        console.log(movie_id)

        axios.post(endpoint, formData)
            .then(response => {
                refreshMovie()
            })
            .catch(err => console.log(err))

    }



    return (

        <>
            <form onSubmit={sendData}>
                <div className="card container d-flex justify-content-center mt-3 w-100 w-md-50">
                    <div className="card-header">
                        write a review for this movie
                    </div>
                    <div className="card-body">

                        <div className="mb-3">
                            <label htmlFor="reviewer-name" className="form-label">Reviewer name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="reviewer-name"
                                placeholder="Enter your name"
                                value={formData.name}
                                name="name"
                                onChange={handleFormData} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="review-text" className="form-label">Review text</label>
                            <textarea
                                className="form-control"
                                id="review-text"
                                rows="3"
                                value={formData.text}
                                name="text"
                                onChange={handleFormData}
                                maxLength={200}
                                placeholder="Write your thoughts here..."
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="review-vote" className="form-label">Rating:</label>
                            <input
                                type="number"
                                min={1}
                                max={5}
                                className="form-control"
                                id="review-vote"
                                value={formData.vote}
                                name="vote"
                                onChange={handleFormData} />
                        </div>

                        <div className="mb-3 text-muted" style={{ fontSize: '0.85rem' }}>
                            <p className="mb-1">* Please avoid multiple or spam reviews, database storage is limited!</p>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Add Review</button>
                        </div>


                    </div>
                </div >
            </form>
        </>
    )
}

export default ReviewForm