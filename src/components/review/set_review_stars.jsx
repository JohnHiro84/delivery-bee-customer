import React from 'react';
import '../../assets/stylesheets/reviews.css';


const SetReviewStars = ({setStars}) => {

  return (
    <div>
      <span id="star-compose-review-1" className="fa fa-star fa-2x" onClick={()=> setStars(1)}></span>
      <span id="star-compose-review-2" className="fa fa-star fa-2x" onClick={()=> setStars(2)}></span>
      <span id="star-compose-review-3" className="fa fa-star fa-2x" onClick={()=> setStars(3)}></span>
      <span id="star-compose-review-4" className="fa fa-star fa-2x" onClick={()=> setStars(4)}></span>
      <span id="star-compose-review-5" className="fa fa-star fa-2x" onClick={()=> setStars(5)}></span>
    </div>
  )
}


export default SetReviewStars;
