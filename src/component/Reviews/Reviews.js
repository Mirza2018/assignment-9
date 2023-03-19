import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const reviwes = useLoaderData()

    console.log(reviwes);
    return (
        <div>
            <h1>Review</h1>
            {
                reviwes.map(review =><Review review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;