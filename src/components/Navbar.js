import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  NavHashLink } from 'react-router-hash-link';

class Navbar extends Component {
  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  }
  render() {

    return (
      <nav className={this.props.isTop ? 'navbar fixed-top navbar-top navbar-expand-lg navbar-dark' : 'navbar fixed-top navbar-expand-lg navbar-dark navbar-top scrolled'}>
          <Link className="navbar-brand" to="/">
            <img src={require("../images/logo-red&white-filled2.svg")} alt="Ewan's Trust" className="ewans-trust-logo img-fluid nav-logo"/>
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-top" aria-controls="navbar top" aria-expanded="false" aria-label="Toggle navigation">
            <i className="white-burger fa fa-bars"></i>
          </button>
          <div className="navbar-collapse collapse" id="navbar-top">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#what-we-do" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>What We Do</NavHashLink>
              </li>
              <li className="nav-item">
                <NavHashLink scroll={el => this.scrollWithOffset(el, 100)} activeClassName="selected" smooth to="/#our-mission" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>Our Mission</NavHashLink>
              </li>
              <li className="nav-item">
                <NavLink to="/community" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>Community</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className={this.props.isTop ? "nav-link" : "nav-link scrolled-link"}>Events</NavLink>
              </li>
            </ul>
            {this.props.isTop ?
              <button type="button" className="btn btn-donate btn-lg header-button nav-btn" data-toggle="modal" data-target="#contactModal">Donate</button> :
              <button type="button" className="btn btn-donate-light btn-lg header-button nav-btn" data-toggle="modal" data-target="#contactModal">Donate</button>
            }
            <button type="button" className="btn btn-gig btn-lg header-button nav-btn" data-toggle="modal" data-target="#gigModal">Give a Gig</button>
          </div>
      </nav>
    )
  }
}

export default Navbar
