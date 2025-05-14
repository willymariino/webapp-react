function ReviewCard({ review }) {

    return (
        <>
            <div className="review-card">
                <p><strong> nome: </strong>{review.name}</p>
                <p><strong> voto: </strong>{review.vote}</p>
                <p><strong> </strong>{review.text}</p>
            </div>

        </>
    )

}

export default ReviewCard