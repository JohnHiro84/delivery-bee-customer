import { getSingleOrdersReview, writeReview } from '../util/review_api_util';


export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";


export const receiveNewReview = newreview => ({
  type: RECEIVE_NEW_REVIEW,
  newreview
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


export const fetchSingleOrdersReview = (id) => dispatch => (
  getSingleOrdersReview(id)
    .then(review => dispatch(receiveReview(review)))
    .catch(err => console.log(err))
);

export const composeReview = data => dispatch => (
  writeReview(data)
    .then(newreview => dispatch(receiveNewReview(newreview)))
    .catch(err => console.log(err))
);
