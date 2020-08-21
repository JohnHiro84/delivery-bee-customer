import React, { Component } from 'react';

import OrderDetailNavigation from "./order_sub_components/order_detail_navigation";

import OrderDetailMap from "./order_detail_map";

import GeneralInformation from "./order_sub_components/general_information";

import LocationInformation from "./order_sub_components/location_information";

import CommentListContainer from '../comment/comment_list_container';
import CommentComposeContainer from '../comment/comment_compose_container';

import SingleReviewContainer from '../review/single_review_container';

import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/order-details.css';


class OrderDetail extends Component {

  constructor(props){

    super(props);
    this.state = {
                order: {
                  _id: "",
                },
                tab: "general_information",
                comments: {}
              };
              this.setFinalConfirmationToTrue = this.setFinalConfirmationToTrue.bind(this);
              this.updateTab = this.updateTab.bind(this);

  }

  componentDidMount() {

    this.props.fetchSingleOrder(this.props.match.params.orderId)
    .then(res => this.setState({'order': res.order.data}));

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.orderId !== this.props.match.params.orderId) {
      this.props.fetchSingleOrder(this.props.match.params.orderId)
      .then(res => this.setState({ 'order': res.order.data }));
    }
  }

  setFinalConfirmationToTrue(){

    this.props.updateConfirmOrderCompletion(this.props.match.params.orderId);
    document.getElementById("confirm-completion").className = "hide-button";

  }

  updateTab(value) {
    this.setState({ tab: value });
  }

  render() {

    const {
      _id,
      distance,
      cost,
      helper_handle,
      instructions,
      pick_up_address,
      drop_off_address,
      createdAt,
      time_completed,
      time_accepted,
      final_confirmation
    } = this.state.order;

    const { tab } = this.state;

    let orderDetailMap = (_id !== "") ? (<OrderDetailMap order={this.state.order} />) : (<></>);

    let generalInformation = (
      <GeneralInformation
      cost={cost}
      instructions={instructions}
      createdAt={createdAt}
      time_completed={time_completed}
      time_accepted={time_accepted}
      helper_handle={helper_handle}
      final_confirmation={final_confirmation}
      setFinalConfirmationToTrue={this.setFinalConfirmationToTrue}
      />
    );

    let locationInformation = (
      <LocationInformation
        distance={distance}
        pick_up_address={pick_up_address}
        drop_off_address={drop_off_address}
      />
    )

    let commentsComposeActive = (helper_handle && !final_confirmation) ? (<CommentComposeContainer />):(<></>);

    if(_id){

          return (
            <section className="order-details">

            {orderDetailMap}

            <OrderDetailNavigation tab={tab} updateTab={this.updateTab.bind(this)}/>

              {(tab === "general_information" && time_completed) ? (<SingleReviewContainer />) : (<></>)}
              {(tab === "general_information") ? generalInformation : (<></>)}

              {(tab === "location_information") ? locationInformation : (<></>)}

              {(tab === "chat_information" && helper_handle) ? (<CommentListContainer />) : (<></>)}
              {(tab === "chat_information" && helper_handle) ? commentsComposeActive : (<></>)}

              {(tab === "chat_information" && !helper_handle) ? (<div className="comments-container"><h3>Not Available</h3></div>) : (<></>)}

            </section>
          );

    } else {
      return (<h1>na</h1>);
    }

  }
}

export default OrderDetail;
