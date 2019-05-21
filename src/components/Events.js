import React, { Component } from 'react';

class Events extends Component {


  render() {
    return (
      <div id="events" className="events">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12 event-text">
              <h2><span className="red">Events</span></h2>
              <p>We hold an Annual 'May the Force be with you' sponsored walk, Canvey Island to Leigh on Sea (held on the nearest weeked to May 4<sup>th</sup>)</p>
              <p>We organise charity activities for children, regular music events, Annual Charity Challenge (previous includes 3 Peaks Challenge) and fundraising evenings, please see below for upcoming events</p>
              <h3>Upcoming Events</h3>
              <p>There are no upcoming events at the moment, please check again soon.</p>
            </div>
          </div>
        </div>
        <img className="logo" src={require('../images/ewans-trust-logo-black.svg')} />
      </div>
    )
  }
}

export default Events;
