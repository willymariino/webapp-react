import { useState } from "react"
function ReviewForm() {

    const initialValues = {
        name: "",
        text: "",
        vote: 1
    }



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
    }



    return (

        <>
            <form onSubmit={sendData}>
                <div className="card container d-flex justify-content-center mt-3 w-50">
                    <div className="card-header">
                        Scrivi una recensione su questo film
                    </div>
                    <div className="card-body">

                        <div className="mb-3">
                            <label htmlFor="reviewer-name" className="form-label">nome recensore</label>
                            <input type="text" className="form-control" id="reviewer-name" placeholder="inserisci il tuo nome" value={formData.name} name="name"
                                onChange={handleFormData} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="review-text" className="form-label">testo della recensione</label>
                            <textarea className="form-control" id="review-text" rows="3" value={formData.text} name="text"
                                onChange={handleFormData}></textarea>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="review-vote" className="form-label">voto:</label>
                            <input type="number" min={1} max={5} className="form-control" id="review-vote" value={formData.vote} name="vote"
                                onChange={handleFormData} />
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">aggiungi</button>
                        </div>


                    </div>
                </div >
            </form>
        </>
    )
}

export default ReviewForm