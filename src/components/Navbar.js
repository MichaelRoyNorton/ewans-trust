import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  NavHashLink } from 'react-router-hash-link';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLight: false,
      mobileOpen: false
    }
  }

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  }

  handleClick = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  }

  render() {

    console.log(this.state)

    let isLight = false

    if(window.location.href === 'http://localhost:3000/community' || window.location.href === 'https://ewans-trust.netlify.com/community') {
      isLight = true
    }

    let darkNav = this.props.isTop ? 'navbar fixed-top navbar-top navbar-expand-lg navbar-dark' : 'navbar fixed-top navbar-expand-lg navbar-dark navbar-top scrolled'
    let lightNav = isLight ? ' navbar-light' : ''
    let mobileNav = this.state.mobileOpen ? ' mobile-open' : ''
    let navClass = darkNav + lightNav + mobileNav

    return (
      <nav className={navClass}>
          <Link className="navbar-brand" to="/">
            <img src={require("../images/logo-red&white-filled2.svg")} alt="Ewan's Trust" className="ewans-trust-logo img-fluid nav-logo"/>
          </Link>
          <button onClick={this.handleClick} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-top" aria-controls="navbar top" aria-expanded="false" aria-label="Toggle navigation">
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
              null :
              <span>
                <a href="https://cafdonate.cafonline.org/9919">
                  <button type="button" className="btn btn-donate btn-lg header-button nav-btn">Donate</button>
                </a>
                <button type="button" className="btn btn-gig btn-lg header-button nav-btn" data-toggle="modal" data-target="#gigModal">Give a Gig</button>
              </span>
            }
          </div>
      </nav>
    )
  }
}

export default Navbar
