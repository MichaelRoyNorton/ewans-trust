import React, {Component} from 'react'
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
            <h5>Registered charity no. 1180697</h5>
          </div>
          <div className="col-md-4">

          </div>
          <div className="col-md-4">

          </div>
        </div>
        <nav className='navbar navbar-bottom'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#our-mission" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>Our Mission</NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#awards" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>Awards</NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#events" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>Events</NavHashLink>
            </li>
            <li className="nav-item">
              <button className={this.props.isTop ? "nav-link nav-button" : "nav-link scrolled-link nav-button"} data-toggle="modal" data-target="#contactModal">Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Footer
