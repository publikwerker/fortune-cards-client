import React, { Component } from 'react';
import './App.css';
import Query from './components/query.js';
import Header from './components/header.js';
import Spread from './components/spread.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  
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