import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../assets/stylesheets/order-compose.css';
import '../../assets/stylesheets/buttons.css';

import {distanceInMiles} from "../../util/map_util/distance_helper";
import {costCalculator} from "../../util/map_util/cost_helper";

class OrderGatherInstructions extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

            user: "",
            helper: "",
            pick_up_lat: "",
            pick_up_long: "",
            pick_up_address: "",
            pick_up_neighborhood: "",
            drop_off_lat: "",
            drop_off_long: "",
            drop_off_address: "",
            drop_off_neighborhood: "",
            instructions: "",
            distance: "",
            cost: "",
            vehicle: "",
            order_completed: "",
            final_confirmation: ""
          }


      this.handleSubmit = this.handleSubmit.bind(this);
      this.addToStateNextScreen = this.addToStateNextScreen.bind(this);
      this.goBack = this.goBack.bind(this);

  }

  componentDidMount(){

    let userId = this.props.currentUser.id;

    if(!this.props.newOrder){

      this.props.history.push(`/orderfrom`);

    } else {
      const {
        pick_up_lat,
        pick_up_long,
        pick_up_address,
        pick_up_neighborhood,
        drop_off_lat,
        drop_off_long,
        drop_off_address,
        drop_off_neighborhood
      } = this.props.newOrder;


      let distance = distanceInMiles(pick_up_lat, pick_up_long, drop_off_lat, drop_off_long);

      let cost = costCalculator(distance);

      this.setState({
        pick_up_lat: pick_up_lat,
        pick_up_long: pick_up_long,
        pick_up_address: pick_up_address,
        pick_up_neighborhood: pick_up_neighborhood,
        drop_off_lat: drop_off_lat,
        drop_off_long: drop_off_long,
        drop_off_address: drop_off_address,
        drop_off_neighborhood: drop_off_neighborhood,
        distance: distance,
        cost: cost,
        user: userId
      });
    }
  }

  addToStateNextScreen(){
    this.props.updateStateNewOrder(this.state);
    this.props.history.push(`/ordermap`);

  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updateStateNewOrder(this.state);
    this.props.history.push(`/ordermap`);

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }



  goBack(){
    this.props.history.push("/orderto");
  }

  render() {

    if(!this.props.newOrder){
      this.props.history.push(`/orderfrom`);
    }

    return (
      <div className="order-form-top-container">
        <h1 className="order-compose-heading">Generate a new order </h1>

        <div className="order-form-container info-gather">
            <h2>Add Instructions for the Helper Bee</h2>
            <form  className="order-form" onSubmit={this.handleSubmit}>
                <div>

                    <input
                      type="textarea"
                      className="order-form-input"
                      value={this.state.instructions}
                      onChange={this.update('instructions')}
                      placeholder="i.e. call me when you drop off the package"
                    />
                    <input
                      className="button-large-primary"
                      type="submit"
                      value="Add Instructions"
                    />

                    <button
                      className="button-large-secondary"
                      onClick={this.goBack}
                      >Go Back
                      </button>

                </div>
            </form>
            <br />

        </div>
      </div>
    )
  }
}

export default withRouter(OrderGatherInstructions);
