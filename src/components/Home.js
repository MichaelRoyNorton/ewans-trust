import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Mission from './Mission';

class Home extends Component {

  render() {
    return (
      <div>
        <Header isTop={this.props.isTop}/>
        <About />
        <div className="line">
        </div>
        <Mission />
      </div>
    )
  }
}

export default Home;
