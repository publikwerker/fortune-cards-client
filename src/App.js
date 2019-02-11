import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_deck } from './actions/index.js';
import { API_BASE_URL } from './config.js';
import  LoginWindow  from './components/login.js';
import  Query  from './components/query.js';
import  Header  from './components/header.js';
import  Spread  from './components/spread.js';

class App extends Component {

componentDidMount() {
  this.loadDeck();
}

// grab a fresh deck from the server
loadDeck(){
  return fetch(`${API_BASE_URL}/tarotDeck`)
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })   
    .then((data) =>{
      console.log(data);
      return this.props.dispatch(set_deck(data))
    })
    .catch(err =>
      this.setState({
        error: 'could not load deck'
      })
    );
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <LoginWindow />
          <Query />
          <Spread />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    deck: state.tarot.deck,
  };
}

export default connect(mapStateToProps)(App);