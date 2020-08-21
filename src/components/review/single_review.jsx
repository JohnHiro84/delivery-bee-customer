import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import DisplayReviewStars from "./display_review_stars";

import '../../assets/stylesheets/reviews.css';


import ReviewModal from "./review_modal";

class SingleReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleReview: ""
    }
    this.reviewModalWindow = this.reviewModalWindow.bind(this);
  }

  reviewModalWindow(e){
    e.preventDefault();
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  componentDidMount() {
    const {order_id} = this.props;

    this.props.fetchSingleOrdersReview(order_id).then(res => this.setState({singleReview: res.review.data[0]}));
  }

  // componentWillReceiveProps(newState) {
  //   // this.setState({ comments: newState.comments });
  // }

  render() {

    const {singleReview} = this.state;

    if(singleReview){
      const {helper_handle, user_handle, message, stars, createdAt} = this.state.singleReview;

      return (
          <ul className="displayed-review">
            <li>Your Review for {helper_handle}</li>
            <li><DisplayReviewStars starCount={stars} /></li>
            <li className="review-message">{message}</li>
            <li className="review-date">{ moment(createdAt).format('MMMM Do YYYY') }</li>
            <li>{user_handle}</li>
          </ul>
      )
    } else {

      return (
        <div className="comments-container">
          <button className="create-review-button" onClick={this.reviewModalWindow}>Leave a review!</button>
          <ReviewModal />
        </div>
      );
    }
  }
}

export default withRouter(SingleReview);
