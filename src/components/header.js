import React from 'react';
import { reduxForm } from 'redux-form';

export class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <nav>
            <a className="header-link purchase-link"
              href="https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order">Purchase Deck</a>
          </nav>
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