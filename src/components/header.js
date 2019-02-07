import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { make_search } from '../actions/index.js';
import './header.css';

class Header extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <header className="App-header">
          <button className="header-link" href="https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order">Purchase Deck</button>
          <button className="header-link" href="#">Member Sign In</button>
          <form className="searchBar" onSubmit={handleSubmit}>
            <Field component="input" 
              type="text" 
              name="searchTerm"
              className="search-field"
            />
            <button className="search-button">Search</button>
          </form>
          <h1 className="banner">FORTUNE.CARDS</h1>
        </header>
      </div>
    );
  }
}

export default reduxForm({
  form: 'search',
  onSubmit: (values, dispatch) => {
    dispatch(make_search(values.searchTerm));
  }
})(Header)