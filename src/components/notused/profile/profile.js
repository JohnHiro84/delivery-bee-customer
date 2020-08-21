// 
// import React from 'react';
// import './App.css';
//
// class Profile extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             events: []
//         }
//     }
//
//     componentWillMount() {
//         console.log(this.props.currentUser.id)
//         this.props.fetchUserEvents(this.props.currentUser.id)
//         // .then(res => this.setState({ events: res }));
//     }
//
//     componentWillReceiveProps(newState) {
//         this.setState({ events: newState.events });
//     }
//
//     render() {
//       // console.log("this.props.events")
//       // console.log(this.props.events);
//       // console.log("this.state.events")
//       // console.log(this.state.events);
//
//         if (this.state.events.length === 0) {
//           return (<div>This user has no Events</div>)
//         } else {
//           return (
//             <div>
//
//
//             </div>
//           );
//         }
//       }
// }
//
// export default Profile;
