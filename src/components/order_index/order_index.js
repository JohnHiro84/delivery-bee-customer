
import React from 'react';
import { withRouter } from 'react-router-dom';
import OrderIndexItem from './order_index_item';

import '../../assets/stylesheets/order-index.css';

class OrderIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer_orders: ""
    }
  }

  componentDidMount() {
    const {id} = this.props.currentUser;

    this.props.fetchCustomerOrders(id)
    .then(res => this.setState({customer_orders: res.orders.data }))
  }

  render() {

    const {customer_orders} = this.state;
    const {indexType} = this.props;
    let orders;

    if(customer_orders){
      orders = customer_orders.reverse().map(order => (
        <OrderIndexItem key={order._id} order={order} />
      ))
    }

    return (
      <div className="order-index-container">
        <h1>{indexType}</h1>
        {orders}
      </div>
    );
  }

}

export default withRouter(OrderIndex);
