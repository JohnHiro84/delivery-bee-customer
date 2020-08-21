// import React from 'react';
// import { withRouter } from 'react-router-dom';
// // import CommentComposeContainer2 from './comment_compose_container2';
// import '../../assets/stylesheets/comments.css';
// import moment from 'moment';
//
// class CommentList extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       comments: ""
//     }
//   }
//
//   componentDidMount() {
//
//     //old way via fetch and state
//     this.props.fetchOrderComments(this.props.match.params.orderId)
//     .then(res => this.setState({ 'comments': res.comments.data }));
//
//     //new way via props
//     // this.setState({'comments': this.props.comments});
//   }
//
//   componentWillReceiveProps(newState) {
//     this.setState({ comments: newState.comments });
//   }
//
//   render() {
//     // console.log(this.state.comments);
//
//     const {handle} = this.props;
//
//     if (this.state.comments.length === 0) {
//       return (<div></div>)
//     } else {
//       return (
//         <div className="comments-container">
//
//           <h1>Chat:</h1>
//
//           <ul>
//           {this.state.comments.map(comment => (
//             <li key={comment._id} className={(handle === comment.handle) ? "your-chat-comment":"thier-chat-comment"}>
//
//             <div className="comment-text-box">
//               <span className="comment-text"> {comment.text}</span>
//             </div>
//             <span className="comment-date">{ moment(comment.date_created).format('h:mma MMMM Do') }</span>
//             <span className="comment-handle">{comment.handle}</span>
//
//             </li>
//           ))}
//           </ul>
//
//         </div>
//       );
//     }
//   }
// }
//
// export default withRouter(CommentList);
// // <span className="comment-date">{ moment(comment.date_created).fromNow() }</span>
