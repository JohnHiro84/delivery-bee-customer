import {
  RECEIVE_REVIEW,
  RECEIVE_NEW_REVIEW
} from '../actions/review_actions';

  const ReviewsReducer = (state = { customer: {}, single: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {

      case RECEIVE_REVIEW:
        newState.single = action.review.data;
        return newState;

      case RECEIVE_NEW_REVIEW:
        newState.new = action.newreview
        return newState;

      default:
        return state;
    }
  };

  export default ReviewsReducer;
