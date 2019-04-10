import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row header-text">
            <div className="col">
              <h1>Ewan's Music Trust has been set up to help fund underprivileged children's musical ambitions, just as Ewan had been so passionate about when teaching <span className="red">music.</span></h1>
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
