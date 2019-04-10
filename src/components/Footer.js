import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom';
import {  NavHashLink } from 'react-router-hash-link';

class Footer extends Component {

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  }

  render () {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-md-4">
            <h5>Ewans Music Trust &copy;2019 </h5>
            <h5>Registered charity no. 1243723</h5>
          </div>
          <div className="col-md-4">

          </div>
          <div className="col-md-4">

          </div>
        </div>
        <nav className='navbar navbar-bottom'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#what-we-do" className="nav-link">What We Do</NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#our-mission" className="nav-link">Our Mission</NavHashLink>
            </li>
            <li className="nav-item">
              <NavLink to="/community" className="nav-link">Community</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className="nav-link">Events</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Footer
