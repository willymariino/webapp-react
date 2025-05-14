function ReviewForm() {
    return (

        <>
            <div className="card container d-flex justify-content-center mt-3 w-50">
                <div className="card-header">
                    Scrivi una recensione su questo libro
                </div>
                <div className="card-body">

                    <div className="mb-3">
                        <label htmlFor="reviewer-name" className="form-label">nome recensore</label>
                        <input type="text" className="form-control" id="reviewer-name" placeholder="inserisci il tuo nome" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label">testo della recensione</label>
                        <textarea className="form-control" id="review-text" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="review-vote" className="form-label">voto:</label>
                        <input type="number" min={1} max={5} className="form-control" id="review-vote" />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">aggiungi</button>
                    </div>


                </div>
            </div >
        </>
    )
}

export default ReviewForm