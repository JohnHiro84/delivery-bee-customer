import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';


const ReviewPostCreation = (props) => {

  useEffect(()=> {
    setTimeout(() => {
      props.history.push('/orderscompleted')
    }, 3500);
  })

  return (

    <div>
      <h1>Thank you for leaving a review!</h1>
    </div>
  )
}


export default withRouter(ReviewPostCreation);
