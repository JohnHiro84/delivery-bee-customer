import axios from 'axios';

export const getSingleOrder = id => {
  return axios.get(`/api/orders/${id}`)
};

////////////////////////customer

export const getCustomerOrdersCompleted = id => {
  return axios.get(`/api/orders/customer/completed/${id}`)
};

export const getCustomerOrdersInProgress = id => {
  return axios.get(`/api/orders/customer/inprogress/${id}`)
};



export const writeOrder = data => {
  return axios.post('/api/orders/', data)
}



///customer signs off final confirmation of completed order
export const updateConfirmCompletion = (id) => {
  // console.log("updateConfirmCompletion");
  return axios.put(`api/orders/confirmed/${id}`,
    {
      id: id
    }
  )
  // .then(response => {
  //   console.log(response);
  // })
  .catch(error => {
    console.log(error);
  });
}


/////////////////////////////////////////comments

export const getOrderComments = id => {
  return axios.get(`/api/orders/${id}/comments`)
};

export const writeComment = data => {
  return axios.post('/api/comments/', data)
}



// export const getOrders = () => {
//   return axios.get('/api/orders')
// };


// export const getCustomerOrders = id => {
//   return axios.get(`/api/orders/customer/${id}`)
// };
