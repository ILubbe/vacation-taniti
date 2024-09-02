import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
    return (
            <div className="review-card">
                <img src={review.image} alt={review.name} className="review-card-img" />
                <div className="review-card-content">
                    <h2 className="review-card-name">{review.name}</h2>
                    <p className="review-card-text">{review.text}</p>
                    <p className="review-card-rating">Rating: {review.rating} / 5</p>
                </div>
            </div>
        
    );
}

export default ReviewCard;