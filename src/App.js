import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Community from './components/Community';
import Home from './components/Home';
import Footer from './components/Footer';
import GigModal from './components/GigModal';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar isTop={this.state.isTop}/>
          <Route exact path="/" render={(props) => <Home isTop={this.state.isTop}/>} />
          <Route path="/community" component={Community} />
          <GigModal />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
