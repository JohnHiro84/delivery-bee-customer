import { connect } from 'react-redux';
import {updateStateNewOrder} from "../../actions/order_actions";
import OrderCheckout from './order_checkout';
import {updateStateNewToast} from "../../actions/toast_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    order: state.orders.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStateNewOrder: data => dispatch(updateStateNewOrder(data)),
    updateStateNewToast: data => dispatch(updateStateNewToast(data))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCheckout);
