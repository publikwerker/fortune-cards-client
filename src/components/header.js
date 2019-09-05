import React from 'react';
import { reduxForm } from 'redux-form';
import MemberButton from './memberButton.js';
import { make_search } from '../actions/index.js';

export class Header extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="header-container">
        <header className="header">
          <nav>
            <a className="header-link purchase-link"
              href="https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order">Purchase Deck</a>
            <MemberButton />
          </nav>
          <form className="searchBar" onSubmit={handleSubmit}>
            {/* <Field component="input" 
              type="text" 
              name="searchTerm"
              className="search-field"
            /><br />
            <button 
              name="search"
              id="search-button"
              type="submit"
              className="search-button"
              disabled={this.props.pristine || this.props.submitting}>Search</button> */}
          </form>
          <h1 className="header__banner">FORTUNE CARDS</h1>
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