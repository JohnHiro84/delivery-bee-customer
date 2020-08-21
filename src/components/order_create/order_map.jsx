import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import '../../assets/stylesheets/order-compose.css';
import '../../assets/stylesheets/buttons.css';

import {orderFormatter} from "../../util/map_util/coordinate_mid_point_helper";

import OrderDetailMap from "../order_detail/order_detail_map";
import OrderCheckout from "./order_checkout_container";

import LocationInformation from "../order_detail/order_sub_components/location_information";

class OrderMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      order: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }



  componentDidMount(){

    let formattedOrder = orderFormatter(this.props.newOrder, this.props.currentUser.handle);

    this.setState({ order: formattedOrder });

  }


  handleSubmit(e) {
    e.preventDefault();
  }

  goBack(){
    this.props.history.push("/orderinstructions");
  }

  render() {

    const {
      pick_up_address,
      drop_off_address,
      distance,
      instructions,
      cost
    } = this.props.newOrder;

    return (
      <>
      {(this.props.newOrder) ? (<OrderDetailMap order={this.props.newOrder} />) : (<></>)}

      <div className="confirm-details">
        <h1>Confirm Details</h1>

        <LocationInformation
          distance={distance}
          pick_up_address={pick_up_address}
          drop_off_address={drop_off_address}
        />

        <h3>Price:</h3>
        <p>${cost}</p>

        <h3>Your Instructions:</h3>
        <p>{instructions}</p>

        <OrderCheckout />

        <button
          className="button-large-secondary"
          onClick={this.goBack}
        >Go Back
        </button>
      </div>
      </>
    )
  }
}


export default withRouter(OrderMap);
