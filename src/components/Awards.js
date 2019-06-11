import React, { Component } from 'react';

class Awards extends Component {
  constructor() {
    super()
    this.state = {
      hoverWorkshops: false,
      hoverBursary: false
    }
    this.handleMouseOverWorkshop = this.handleMouseOverWorkshop.bind(this)
    this.handleMouseOutWorkshop = this.handleMouseOutWorkshop.bind(this)
    this.handleMouseOverBursary = this.handleMouseOverBursary.bind(this)
    this.handleMouseOutBursary = this.handleMouseOutBursary.bind(this)
  }

  handleMouseOverWorkshop () {
    this.setState({
      hoverWorkshops: true
    })
  }

  handleMouseOutWorkshop () {
    this.setState({
      hoverWorkshops: false
    })
  }

  handleMouseOverBursary () {
    this.setState({
      hoverBursary: true
    })
  }

  handleMouseOutBursary () {
    this.setState({
      hoverBursary: false
    })
  }

  render() {
    return (
      <div id="awards" className="awards">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 awards-text">
              <h2 className="subheading">Ewan Lane Music Foundation <span className="red">Awards</span></h2>
              <div className="row">
                <div className="col-md-6">
                  <button type="button" onMouseOver={this.handleMouseOverWorkshop} onMouseOut={this.handleMouseOutWorkshop} className="btn btn-workshop btn-lg" data-toggle="modal" data-target="#workshopModal"><h3>Annual Workshops</h3><h3><i className={this.state.hoverWorkshops ? "fas fa-guitar wobble-ver-left red" : "fas fa-guitar"}></i></h3><p>Find out more</p></button>
                </div>
                <div className="col-md-6">
                  <button type="button" onMouseOver={this.handleMouseOverBursary} onMouseOut={this.handleMouseOutBursary} className="btn btn-bursary btn-lg" data-toggle="modal" data-target="#bursaryModal"><h3>Bursary Awards</h3><h3><i className={this.state.hoverBursary ? "fas fa-drum vibrate-3 red" : "fas fa-drum" }></i></h3><p>Find out more</p></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="logo" src={require('../images/ewans-trust-logo-white.svg')} />
      </div>
    )
  }
}

export default Awards;
