import React from 'react';

const Review = ({ review }) => {
    const { name, img, text, ratting } = review
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{text}</p>
            <small>{ratting}</small>
        </div>
    );
};

export default Review;