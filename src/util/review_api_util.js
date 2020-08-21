import axios from 'axios';



export const getSingleOrdersReview = id => {
  return axios.get(`/api/orders/${id}/reviews`)
};

////////////////// create review

export const writeReview = data => {
  return axios.post('/api/reviews/', data)
}
