import { connect } from 'react-redux';

import OrderDetail from './order_detail';
import { fetchSingleOrder, updateConfirmOrderCompletion } from '../../actions/order_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    singleOrder: state.orders.single
  };
};

const mapDispatchToProps = dispatch => ({

  fetchSingleOrder: id => dispatch(fetchSingleOrder(id)),
  updateConfirmOrderCompletion: (id) =>dispatch(updateConfirmOrderCompletion(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
