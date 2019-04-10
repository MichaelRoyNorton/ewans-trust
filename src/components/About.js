import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="what-we-do" className="what-we-do">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 what-we-do-text">
              <h2>What We <span className="red">Do</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies vulputate sapien vel vehicula. Cras imperdiet metus ac lectus eleifend vehicula. Maecenas suscipit nibh ut scelerisque facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sit amet nulla non lectus ornare suscipit.</p>
              <p>Etiam velit justo, pretium suscipit quam ac, molestie ornare nulla. Cras eu laoreet leo. Quisque ultricies mi at sem finibus, vestibulum commodo urna dictum. Praesent sed dignissim magna, a tincidunt urna. Nunc facilisis quis ipsum quis consectetur. Etiam vel nisl id dui bibendum tempus a aliquet ipsum. Sed sed cursus orci. Cras erat lectus, tincidunt quis fermentum quis, dapibus vitae leo.</p>
            </div>
          </div>
        </div>
        <img className="logo" src={require('../images/logo-red&black-filled20.svg')} />
      </div>
    )
  }
}

export default About;
