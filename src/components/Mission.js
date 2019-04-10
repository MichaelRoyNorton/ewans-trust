import React, { Component } from 'react';

class Mission extends Component {
  render() {
    return (
      <div id="our-mission" className="mission">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mission-text">
              <h2>Our <span className="red">Mission</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies vulputate sapien vel vehicula. Cras imperdiet metus ac lectus eleifend vehicula. Maecenas suscipit nibh ut scelerisque facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet nulla non lectus ornare suscipit.</p>
              <p>Etiam velit justo, pretium suscipit quam ac, molestie ornare nulla. Cras eu laoreet leo. Quisque ultricies mi at sem finibus, vestibulum commodo urna dictum. Praesent sed dignissim magna, a tincidunt urna. Nunc facilisis quis ipsum quis consectetur. Etiam vel nisl id dui bibendum tempus a aliquet ipsum. Sed sed cursus orci. Cras erat lectus, tincidunt quis fermentum quis, dapibus vitae leo.</p>
            </div>
          </div>
        </div>
        <img className="logo" src={require('../images/logo-red&white-filled2.svg')} />
      </div>
    )
  }
}

export default Mission;
