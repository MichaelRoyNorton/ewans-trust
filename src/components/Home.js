import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Awards from './Awards';
import Events from './Events';

class Home extends Component {

  render() {
    return (
      <div>
        <Header isTop={this.props.isTop}/>
        <About />
        <div className="line">
        </div>
        <Awards />
        <Events />
      </div>
    )
  }
}

export default Home;
