// import React, { Component } from 'react';
//
//
// // import { withRouter } from 'react-router-dom';
// import '../../assets/stylesheets/new-styles.css';
//
// import OrderDetailMap from "./order_detail_map";
// import OrderInformation from "../order_detail/order_information";
//
// import CommentListContainer from '../comment/comment_list_container';
// import CommentComposeContainer from '../comment/comment_compose_container';
//
// import moment from 'moment';
//
// class OrderDetail extends Component {
//
//   constructor(props){
//
//     super(props);
//     this.state = {
//                 order: {
//                   _id: "",
//                 },
//                 tab: "information",
//                 comments: {}
//               };
//               this.confirmOrderComplete = this.confirmOrderComplete.bind(this);
//   }
//
//   componentDidMount() {
//
//     // console.log("order detail ");
//     // console.log(this.props.match.params.orderId);
//
//     this.props.fetchSingleOrder(this.props.match.params.orderId)
//     .then(res => this.setState({'order': res.order.data}));
//
//     // console.log(this.props.match.params.orderId);
//     // this.props.fetchEventComments(this.props.match.params.eventId);
//   }
//
//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.orderId !== this.props.match.params.orderId) {
//       this.props.fetchSingleOrder(this.props.match.params.orderId)
//       .then(res => this.setState({ 'order': res.order.data }));
//     }
//   }
//
//   confirmOrderComplete(e){
//     e.preventDefault();
//     this.props.updateConfirmOrderCompletion(this.props.match.params.orderId)
//     document.getElementById("confirm-completion").className = "hide-button";
//   }
//
//
//   render() {
//     // console.log(this.state);
//
//     const {
//       _id,
//       distance,
//       cost,
//       helper_handle,
//       instructions,
//       pick_up_address,
//       drop_off_address,
//       createdAt,
//       time_completed,
//       final_confirmation
//     } = this.state.order;
//
//     const { tab } = this.state;
//
//     let orderDetailMap = (_id !== "") ? (<OrderDetailMap order={this.state.order} />) : (<></>);
//
//     let orderCompleted = (time_completed) ? (<h3 className="green-text">Order Completed on { moment(time_completed).format('MMMM Do YYYY, h:mma') }</h3>): (<></>);
//
//     let confirmCompletion = (time_completed && final_confirmation === false) ? (<button id="confirm-completion" onClick={this.confirmOrderComplete}>Verify Completed</button>):(<></>);
//
//     let commentsComposeActive = (helper_handle && !final_confirmation) ? (<CommentComposeContainer />):(<></>);
//
//
//     // let moreInfo = (
//     //   <OrderInformation
//     //   distance={distance}
//     //   cost={cost}
//     //   instructions={instructions}
//     //   pick_up_address={pick_up_address}
//     //   drop_off_address={drop_off_address}
//     //   />
//     // );
//
//
//     if(_id){
//
//           return (
//             <section className="order-details">
//
//               {orderDetailMap}
//
//
//               {(helper_handle) ? (<h3>Order Assigned To: {helper_handle}</h3>):(<></>)}
//               {orderCompleted}
//
//               {confirmCompletion}
//
//               {moreInfo}
//
//               <h3>Distance in Miles:</h3>
//               <p>{distance}</p>
//
//               <h3>Price:</h3>
//               <p>${cost}</p>
//
//               <h3>Instructions for Bee</h3>
//               <p>{instructions}</p>
//
//               <h3>Pick Up Location:</h3>
//               {pick_up_address.split(",").map(ele => (<p>{ele}</p>))}
//
//               <h3>Drop Off Location:</h3>
//               {drop_off_address.split(",").map(ele => (<p>{ele}</p>))}
//
//
//               <h3>Order placed on:</h3>
//               <p>{ moment(createdAt).format('MMMM Do YYYY, h:mma') }</p>
//
//               <CommentListContainer />
//               {commentsComposeActive}
//
//             </section>
//           );
//
//     } else {
//       return (<h1>na</h1>);
//     }
//
//   }
// }
//
// export default OrderDetail;
// // <CommentListContainer />
// // <CommentComposeContainer2 />
//
// // <OrderInformation
// // distance={distance}
// // cost={cost}
// // instructions={instructions}
// // pick_up_address={pick_up_address}
// // drop_off_address={drop_off_address}
// // />
