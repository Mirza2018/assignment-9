import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const reviwes = useLoaderData()

    console.log(reviwes);
    return (
        <div >
            <h1 className='text-center text-rose-500 text-2xl font-black font-mono my-12'>Reviews from buyers</h1>
            <div className='grid grid-cols-3 gap-2 font-sans'>
                {
                    reviwes.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;