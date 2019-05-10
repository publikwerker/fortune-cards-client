import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set_deck } from './actions/index.js';
import { API_BASE_URL } from './config.js';
import  LoginForm  from './components/login.js';
import  Query  from './components/query.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import  Header  from './components/header.js';
import  Spread  from './components/spread.js';
import ClearButton from './components/clearButton.js';
import ReadingHistory from './components/readingHistory.js';
import Footer from './components/footer.js';
import Info from './components/Info';

export class App extends Component {

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
    .then((data) => {
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
      <main className="App">
          <Header />
        <ErrorBoundary>
          <LoginForm />
        </ErrorBoundary>
          <Info />
          <Query />
          <ClearButton />
          <Spread />
          <ClearButton />
          <ReadingHistory />
          <Footer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    deck: state.tarot.deck,
  };
}

export default connect(mapStateToProps)(App);