import axios from 'axios';



export const getSingleOrdersReview = id => {
  return axios.get(`https://immense-ridge-65848.herokuapp.com/api/orders/${id}/reviews`)
};

////////////////// create review

export const writeReview = data => {
  return axios.post('https://immense-ridge-65848.herokuapp.com/api/reviews/', data)
}
