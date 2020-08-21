import React, { Component } from 'react';
import '../../assets/stylesheets/review-modal.css';

import ReviewComposeContainer from '../review/review_compose_container';


class ModalMessage extends Component {

  closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  render() {
    return (
      <>
        <div id="myModal" className="modal">

          <div className="modal-content">

            <div className="modal-header">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <h2>Review</h2>
              <p>Please review your experience</p>
            </div>
            <div className="modal-body">
              <ReviewComposeContainer />
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default ModalMessage;
