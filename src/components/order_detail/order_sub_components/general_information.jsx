import React from 'react';
import moment from 'moment';

import '../../../assets/stylesheets/order-details.css';


const GeneralInformation = ({
  cost,
  instructions,
  createdAt,
  time_completed,
  time_accepted,
  helper_handle,
  final_confirmation,
  setFinalConfirmationToTrue
}) => {

  let orderCompleted = (time_completed) ? (<><h3 className="green-text">Completed:</h3><p className="green-text">{ moment(time_completed).format('MMMM Do YYYY, h:mma') }</p></>): (<></>);
  let orderAccepted = (time_accepted) ? (<><h3>Accepted:</h3><p className="green-text">{ moment(time_accepted).format('MMMM Do YYYY, h:mma') }</p></>): (<></>);
  let orderCreated = (createdAt) ? (<><h3>Placed:</h3><p>{ moment(createdAt).format('MMMM Do YYYY, h:mma') }</p></>): (<></>);
  let confirmCompletion = (time_completed && final_confirmation === false) ? (<button id="confirm-completion" className="button-large-primary" onClick={setFinalConfirmationToTrue}>Verify Completed and Move to Completed Tab</button>):(<></>);


  return (
    <div className="general-information">
      <h1>General Information</h1>

      {confirmCompletion}


      {orderCompleted}
      {orderAccepted}
      {orderCreated}

      {(helper_handle) ? (<h3>Assigned Helper: {helper_handle}</h3>):(<></>)}

      <h3>Price:</h3>
      <p>${cost}</p>

      <h3>Your Instructions:</h3>
      <p>{instructions}</p>

    </div>
  )
}

export default GeneralInformation;
