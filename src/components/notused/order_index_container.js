// // src/components/tweets/tweets_container.js
//
// import { connect } from 'react-redux';
// import {
//     fetchCustomerOrders,
//     fetchCustomerOrdersInProgress,
//     fetchCustomerOrdersCompleted
// } from '../../actions/order_actions';
//
// import OrderIndex from './order_index';
//
// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.session.user,
//     customerOrders: state.orders.customer,
//     indexType: "general"
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCustomerOrders: (id) => dispatch(fetchCustomerOrders(id)),
//     fetchCustomerOrdersInProgress: (id) => dispatch(fetchCustomerOrdersInProgress(id)),
//     fetchCustomerOrdersCompleted: (id) => dispatch(fetchCustomerOrdersCompleted(id))
//
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(OrderIndex);
