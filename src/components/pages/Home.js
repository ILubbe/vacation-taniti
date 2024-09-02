import React from 'react';
import '../../App.css';
import '../Reviews/ReviewCard.css';
import Video from '../Video';
import ReviewCard from '../Reviews/ReviewCard';
import reviews from '../Reviews/ReviewData';
import About from '../About';

function Home () {
    return (
        <>
            <Video />
            <div className='review-container'>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
            <About />
        </>
    );
}

export default Home;