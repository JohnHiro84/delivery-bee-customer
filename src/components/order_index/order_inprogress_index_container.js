
import { connect } from 'react-redux';
import {
  fetchCustomerOrdersInProgress
} from '../../actions/order_actions';

import OrderIndexInProgress from './order_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    customerOrders: state.orders.customer,
    indexType: "In Progress"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCustomerOrders: (id) => dispatch(fetchCustomerOrdersInProgress(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderIndexInProgress);
