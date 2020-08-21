import React, {useEffect} from 'react';

import { withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ToastNotification(props) {

  useEffect(()=> {

    if(props.toast.new === "new_order"){

      props.updateStateNewToast({toast: ""});

      toast.success('You have successfully created a new order. Thank You! One of our Helper Bees will get on it asap.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  })

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default withRouter(ToastNotification);
