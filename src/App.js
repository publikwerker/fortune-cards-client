import React, { Component } from 'react';
import './App.css';
import { API_BASE_URL } from './config.js';
import Query from './components/query.js';
import Header from './components/header.js';
import Spread from './components/spread.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

componentDidMount() {
  this.loadDeck();
}

loadDeck(){
  return fetch(`${API_BASE_URL}/tarotDeck`)
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(tarotDeck =>
      this.setState({
        deck: tarotDeck
      })
    )
    .catch(err =>
      this.setState({
        error: 'could not load deck'
      })
    );
}
  
  render() {

  console.log(this.state);

    return (
      <div className="App">
        <Header />
        <Query />
        <Spread />
      </div>
    );
  }
}