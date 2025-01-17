import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props 
    const relevantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewsList = relevantReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;