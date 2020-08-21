import React from 'react';
import { withRouter } from 'react-router-dom';

import { validateReview } from "../../util/review_util/review_validation";

import SetReviewStars from "./set_review_stars";


class ReviewCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        order_id: "",
        user_id: "",
        helper_id: "",
        user_handle: "",
        helper_handle: "",
        stars: "",
        message: "",
        errors : {}
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.setStars = this.setStars.bind(this);

  }

  componentDidMount() {

    const { order_id, user_id, helper_id, user_handle, helper_handle} = this.props;

    this.setState({
      order_id: order_id,
      user_id: user_id,
      helper_id: helper_id,
      user_handle: user_handle,
      helper_handle: helper_handle
    });
  }


  handleSubmit(e) {
    e.preventDefault();

    const {
      order_id,
      user_id,
      helper_id,
      user_handle,
      helper_handle,
      stars,
      message
    } = this.state;

    let isValid = validateReview(stars, message);

    if(isValid["stars"] || isValid["message"]){
      this.setState({errors: isValid});
      return
    }

    let new_review = {
      order_id: order_id,
      user_id: user_id,
      helper_id: helper_id,
      user_handle: user_handle,
      helper_handle: helper_handle,
      stars: stars,
      message: message
    };

    this.props.composeReview(new_review)
    .then(this.setState({ message: '', stars: '' })
    );
    this.props.history.push("/postreview");

  }


  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  setStars(num){

    for(let i = 1; i<=5; i++){
      if(i<=num){
        document.getElementById(`star-compose-review-${i}`).className="fa fa-star star-checked fa-2x";
      } else {
        document.getElementById(`star-compose-review-${i}`).className="fa fa-star fa-2x";
      }
    }
    this.setState({stars:num});

  }

  render() {

    const { errors } = this.state;

    return (
        <div >
            <form onSubmit={this.handleSubmit}>
                <div className="comment-compose">
                  <SetReviewStars setStars={this.setStars} />

                  <textarea
                    className="comment-input"
                    type="textarea"
                    value={this.state.message}
                    onChange={this.update('message')}
                    placeholder="submit a new review"
                  />
                  <ul className="review-form-errors">
                  {(errors["stars"] || errors["message"]) ? <li>Errors</li> : <></>}
                    {(errors["stars"]) ? <li>Please select star count from 1 to 5</li> : <></>}
                    {(errors["message"]) ? <li>Please make sure you leave a message</li> : <></>}
                  </ul>
                  <button className="comment-button" type="submit">Submit Review</button>
                </div>
            </form>
        </div>
    )
  }
}

export default withRouter(ReviewCompose);
