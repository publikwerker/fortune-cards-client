import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <button className="header-link" href="https://www.publikwerks.com/thelema-tarot-deck/tarot-deck-pre-order">Purchase Deck</button>
        <button className="header-link" href="#">Member Sign In</button>
        <h1 className="banner">FORTUNE.CARDS</h1>
      </header>
    </div>
  );
}