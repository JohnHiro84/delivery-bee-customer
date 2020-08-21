import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/order-index-item.css';

import moment from 'moment';

class OrderIndexItem extends React.Component {

  orderStatus(order_completed, helper, helper_handle){
    if(order_completed){
      return (<h3 className="green-text">Order Completed By {helper_handle}</h3>);
    } else if(!order_completed && helper){
      return (<h3 className="helper-accepted">{helper_handle} is on it</h3>);
    } else if(!order_completed && !helper){
      return (<h3 className="helper-inprogress">In Progress</h3>);
    }
  }

  render() {

    const {
      _id,
      createdAt,
      distance,
      pick_up_address,
      drop_off_address,
      helper,
      helper_handle,
      order_completed
    } = this.props.order;

    return (
        <div className="order-index-item">

          <Link to={`/api/orders/${_id}`}>

            <h3 className="order-date">{ moment(createdAt).format('MMMM Do YYYY, h:mm:ss a') }</h3>

            <h3>From: {pick_up_address}</h3>
            <h3>To: {drop_off_address}</h3>
            <h3>{distance} Miles</h3>
            {this.orderStatus(order_completed, helper, helper_handle)}
          </Link>
        </div>
    );
  }
}

export default OrderIndexItem;
