// src/util/tweet_api_util.js

import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/events')
};

export const convertAddressToCoords = term => {
  // console.log("util file");
  // console.log(term)
  // console.log(process.env.REACT_APP_KEY_MAPBOX);
  // return axios.get(`/api/events/user/${id}`)
  // return axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/San Francisco Ferry Plaza.json?access_token=pk.eyJ1IjoiYXlhbWJhbyIsImEiOiJja2Q0YXp6a28weGtuMnJwNWltMHhiMjlhIn0.QlhNcW8YbdVv2B0o4jkbpw")
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json?access_token=${process.env.REACT_APP_KEY_MAPBOX}`)

};

export const fetchAddressInfo = term => {
  // console.log("util file");
  // console.log(term)
  // console.log(process.env.REACT_APP_KEY_MAPBOX);
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${term}.json?access_token=${process.env.REACT_APP_KEY_MAPBOX}`)

};
//
// export const writeEvent = data => {
//   return axios.post('/api/events/', data)
// }
//
// export const getEvent = id => {
//   return axios.get(`/api/events/${id}`)
// };
//
// export const updateEventGoing = (id, new_person) => {
//   // return axios.put(`/api/events/${id}`, new_person)
//
//   return axios.put(`api/events/${id}`,
//     {
//       whos_going: new_person
//     }
//   )
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }
//
// //comments experiment
//
// export const getEventComments = id => {
//   return axios.get(`/api/events/${id}/comments`)
// };
//
//
// export const writeComment = data => {
//   return axios.post('/api/comments/', data)
// }
