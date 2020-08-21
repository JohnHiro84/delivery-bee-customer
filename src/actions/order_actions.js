
import {
  getCustomerOrdersInProgress,
  getCustomerOrdersCompleted,
  updateConfirmCompletion,
  getSingleOrder,
  getOrderComments,
  writeComment
  // getCustomerOrders,
  // updateOrderHelper,
} from '../util/order_api_util';

export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";

export const RECEIVE_CUSTOMER_ORDERS = "RECEIVE_CUSTOMER_ORDERS";

export const RECEIVE_NEW_ORDER = "RECEIVE_NEW_ORDER";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

// export const RECEIVE_USER_ORDERS = "RECEIVE_USER_ORDERS";
//

export const receiveNewOrder = neworder => ({
  type: RECEIVE_NEW_ORDER,
  neworder
})

export const updateStateNewOrder = data => dispatch => (
  dispatch(receiveNewOrder(data))
);

export const receiveCustomerOrders = orders => ({
  type: RECEIVE_CUSTOMER_ORDERS,
  orders
});

export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

export const fetchCustomerOrdersInProgress = (id) => dispatch => (

  getCustomerOrdersInProgress(id)
    .then(orders => dispatch(receiveCustomerOrders(orders)))
    .catch(err => console.log(err))
);

export const fetchCustomerOrdersCompleted = (id) => dispatch => (

  getCustomerOrdersCompleted(id)
    .then(orders => dispatch(receiveCustomerOrders(orders)))
    .catch(err => console.log(err))
);


export const fetchSingleOrder = (id) => dispatch => (
  getSingleOrder(id)
    .then(order => dispatch(receiveOrder(order)))
    .catch(err => console.log(err))
);

export const updateConfirmOrderCompletion = (id) => dispatch => (
  updateConfirmCompletion(id)

);

////////////////////////////////////comments

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});


export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
})


export const fetchOrderComments = (id) => dispatch => (
  getOrderComments(id)
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);


export const composeComment = data => dispatch => (
  writeComment(data)
    .then(comment => dispatch(receiveNewComment(comment)))
    .catch(err => console.log(err))
);



//////////////////helper routes
//
// export const updateOrder = (id, new_person) => dispatch => (
//   updateOrderHelper(id, new_person)
//   // .then(recipe => dispatch(receiveSingleRecipe(recipe)))
// );

/////////////////// not used



// export const receiveOrders = orders => ({
//   type: RECEIVE_ORDERS,
//   orders
// });

// export const receiveUserOrders = orders => ({
//   type: RECEIVE_USER_ORDERS,
//   orders
// });

// export const fetchCustomerOrders = (id) => dispatch => (
//
//   getCustomerOrders(id)
//     .then(orders => dispatch(receiveCustomerOrders(orders)))
//     .catch(err => console.log(err))
// );






// export const fetchCustomerOrders = id => dispatch => (
//   getCustomerOrders(id)
//     .then(orders => dispatch(receiveUserOrders(orders)))
//     .catch(err => console.log(err))
// );
//
// export const composeOrder = data => dispatch => (
//   writeOrder(data)
//     .then(neworder => dispatch(receiveNewOrder(neworder)))
//     .catch(err => console.log(err))
// );
//
