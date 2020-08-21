import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import '../assets/stylesheets/app.css';


import NavBarContainer from './nav/navbar_container';
import Landing from './landing/landing';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

// import StripeApp from "./stripe/App";
// <ProtectedRoute exact path="/cart" component={StripeApp} />


//////////Routes used for Creating an Order
import OrderFrom from "./order_create/order_gather_from_container";
import OrderTo from "./order_create/order_gather_to_container";
import OrderInstructions from "./order_create/order_gather_instructions_container";
import OrderMap from "./order_create/order_map_container";

import OrderIndexInProgress from "./order_index/order_inprogress_index_container";
import OrderIndexCompleted from "./order_index/order_completed_index_container";

import OrderDetail from "./order_detail/order_detail_container";

import ReviewPostCreation from "./review/review_post_creation";

import ToastNotification from "./toast/toast_notification_container";


const App = () => (
  <div className="app-container">

    <NavBarContainer />
    <ToastNotification />

    <Switch>
      <AuthRoute exact path="/" component={Landing} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/orderfrom" component={OrderFrom} />
      <ProtectedRoute exact path="/orderto" component={OrderTo} />
      <ProtectedRoute exact path="/orderinstructions" component={OrderInstructions} />
      <ProtectedRoute exact path="/ordermap" component={OrderMap} />

      <ProtectedRoute exact path="/events" component={OrderIndexInProgress} />
      <ProtectedRoute exact path="/ordersinprogress" component={OrderIndexInProgress} />
      <ProtectedRoute exact path="/orderscompleted" component={OrderIndexCompleted} />

      <ProtectedRoute path="/api/orders/:orderId" component= {OrderDetail} />

      <ProtectedRoute exact path="/postreview" component={ReviewPostCreation} />

    </Switch>
  </div>
);

export default App;
