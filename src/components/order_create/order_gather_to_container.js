import { connect } from 'react-redux';
import {updateStateNewOrder} from "../../actions/order_actions";
import OrderGatherTo from './order_gather_to';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newOrder: state.orders.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStateNewOrder: data => dispatch(updateStateNewOrder(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderGatherTo);
