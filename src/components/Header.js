import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row header-text">
            <div className="col">
              <h1>Ewan Lane Music Foundation helps fund children's musical <span className="red">ambitions.</span></h1>
              {this.props.isTop ?
                <div className="col header-buttons">
                  <a href="https://cafdonate.cafonline.org/9919">
                    <button type="button" className="btn btn-donate btn-lg header-button nav-btn">Donate</button>
                  </a>
                  <button type="button" className="btn btn-gig btn-lg header-button nav-btn" data-toggle="modal" data-target="#gigModal">Give a Gig</button>
                </div>
                :
                null
              }
              <img className="music" src={require('../images/note-1.svg')} alt="music" />
              <img className="music" src={require('../images/note-5.svg')} alt="music"/>
              <img className="music" src={require('../images/note-2.svg')} alt="music"/>
              <img className="music" src={require('../images/note-6.svg')} alt="music"/>
              <img className="music" src={require('../images/note-7.svg')} alt="music"/>
              <img className="music" src={require('../images/note-3.svg')} alt="music"/>
              <img className="music" src={require('../images/note-4.svg')} alt="music"/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
