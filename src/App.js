import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Spread from './components/spread.js';
import store from './components/store.js';
const shuffle = require('shuffle-array');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      spreadNumber:3,
      shuffledDeck:shuffle(store.atu),
    };
  };
  

  render() {

  console.log(this.state);

    return (
      <div className="App">
        <Header />
        <Spread cardsDealt={(this.state.shuffledDeck.slice(0, this.state.spreadNumber))}/>
      </div>
    );
  }
}