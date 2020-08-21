import { connect } from 'react-redux';
import ReviewCompose from './review_compose';

import { composeReview } from '../../actions/review_actions';


const mapStateToProps = (state, events) => {

  return {
    currentUser: state.session.user,
    order_id: state.orders.single._id,
    user_id: state.orders.single.user,
    helper_id: state.orders.single.helper,
    user_handle: state.orders.single.user_handle,
    helper_handle: state.orders.single.helper_handle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeReview: data => dispatch(composeReview(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCompose);
