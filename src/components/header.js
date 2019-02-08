import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './login.js';
import { Field, reduxForm } from 'redux-form';
import { make_search } from '../actions/index.js';
import './header.css';

class Header extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <header className="App-header">
          <nav>
            <button className="header-link" href="https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order">Purchase Deck</button>
            <Link to="/login">Member Login</Link>
            <button className="header-link" href="#">Member Sign In</button>
          </nav>
          <form className="searchBar" onSubmit={handleSubmit}>
            <Field component="input" 
              type="text" 
              name="searchTerm"
              className="search-field"
            />
            <button className="search-button">Search</button>
          </form>
          <h1 className="banner">FORTUNE.CARDS</h1>
          <div className="login-container">
            <Route exact path="/login" component={Login}/>
        </div>
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