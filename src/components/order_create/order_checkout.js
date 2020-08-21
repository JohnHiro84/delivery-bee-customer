import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

import '../../assets/stylesheets/buttons.css';

import StripeCheckout from "react-stripe-checkout";


function OrderCheckout(props) {

  const [order, setOrder] = useState({
    name: "",

  })


  useEffect(()=> {
    setOrder(props.order);
  })


  const makePayment = token => {

    const body = {
      token,
      order
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {


      props.updateStateNewToast({toast: "new_order"});
      props.history.push("/ordersinprogress");
    })
    .catch(error => console.log(error));


  }

  return (
    <div className="order-create-checkout">
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name="Delivery"
        amount={ order.cost * 100}
        shippingAddress
        billingAddress
      >
        <button className="button-large-primary">Confirm delivery for ${order.cost}</button>
      </StripeCheckout>
    </div>
  );
}

export default withRouter(OrderCheckout);
