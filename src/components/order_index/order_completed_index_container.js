import { connect } from 'react-redux';
import {
    fetchCustomerOrdersCompleted
} from '../../actions/order_actions';

import OrderIndexInProgress from './order_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    customerOrders: state.orders.customer,
    indexType: "Completed"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCustomerOrders: (id) => dispatch(fetchCustomerOrdersCompleted(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderIndexInProgress);
