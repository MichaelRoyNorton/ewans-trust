import React, { Component } from 'react';

class About extends Component {


  render() {
    return (
      <div id="our-mission" className="what-we-do">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12 what-we-do-text">
              <h2>Our <span className="red">Mission</span></h2>
              <p>We help transform the lives of children and young people living in the most challenging of circumstances in Canvey Island and South East Essex through the provision of space, instruments, instruction and performance opportunities that are not otherwise available.</p>
              <p>Our mission is to support children who don’t get to make music because of who they are, where they live or what they are going through.</p>
            </div>
          </div>
        </div>
        <img className="logo" src={require('../images/ewans-trust-logo-black.svg')} />
      </div>
    )
  }
}

export default About;
