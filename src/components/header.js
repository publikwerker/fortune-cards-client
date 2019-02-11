import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { make_search, toggle_login } from '../actions/index.js';
import './header.css';

class Header extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <header className="App-header">
          <nav>
            <a className="header-link"
              href="https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order">Purchase Deck</a>
            <button className="header-link" href="#" onClick={(e)=>this.props.dispatch(toggle_login())}>Member Login</button>
          </nav>
          <form className="searchBar" onSubmit={handleSubmit}>
            <Field component="input" 
              type="text" 
              name="searchTerm"
              className="search-field"
            /><br />
            <button name="search"
            type="submit"
            className="search-button"
            disabled={this.props.pristine || this.props.submitting}>Search</button>
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