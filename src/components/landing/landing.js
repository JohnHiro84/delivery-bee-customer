import React from 'react';
import { Link } from 'react-router-dom'

import '../../assets/stylesheets/landing.css';


class Landing extends React.Component {

  render() {
    let image_string = (<img className="main-bee" src={ require(`../../assets/images/deliverybee.jpeg`) } alt="delivery bee" />);

    return (
      <div className="landing-container">
        <div className="landing">
        {image_string}
          <div className="landing-centered-message">


            <p>The best way to deliver what you need.</p>
            <h2>Let us take care of your delivery today!</h2>

            <Link className="call-to-action-link" to={'/signup'}>Signup</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
