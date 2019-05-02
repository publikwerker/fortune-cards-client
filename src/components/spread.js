import React from 'react';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';
import { ClearButton } from './clearButton';

export function Spread(props) {

  //display heading if cards have been dealt
  function yourReading(){
    if (props.cardsDealt.length>0){
      return (
        <div>
          <h2 className="reading-heading">Your Reading</h2>
          <ClearButton dispatch={props.dispatch}/>
        </div>
      )
    }
  }

  //display the card images on top
  const theHeading = yourReading();
  const cardImages = props.cardsDealt.map((card)=> {
    return (
      <li className="card-image" key={card.name}>
        <CardImages {...card}/>
      </li>
    )
  });

  // display the card information below
  const cardDescriptions = 
    props.cardsDealt.map((card, index) => {
      return(
      <li className="card-description" key={card.name}>
      <span className="position-indicator">Card position: {index+1}</span>
      <CardDescriptions {...card}/>
    </li>
      )
  });

  //display the comment and save form
  function saveToHistory() {

    function handleSave(e) {
      e.preventDefault();
      console.log(e);
      console.log(e.currentTarget);
      console.log(e.target);
    }

    if (props.cardsDealt.length>0){
      if (props.currentUser !== null){
        return (
          <div className="history-form">
            <form>
              <label>Comments:</label>
              <input type="text"
              className="comments"
              placeholder="We'll see..."></input>
              <button
                className="save-history"
                id="save-history"
                type="submit"
                onClick={(e)=>handleSave(e)}
                >Save</button>
            </form>
          </div>
        )
      } else {
        return (
          <div>
            <h3>Sign in to save your readings!</h3>
          </div>
        )
      }
    }
  }

  const historyForm = saveToHistory();

  return (
    <section className="reading-display">
        {theHeading}
      <ul className="spread">
        {cardImages}
      </ul>
      <ul className="spread">
        {cardDescriptions}
      </ul>
        {historyForm}
    </section>
  );
}

// @cardsDealt: deal the appropriate number of cards
function mapStateToProps(state) {
return {
  cardsDealt:state.tarot.deck.slice(0, state.tarot.spreadNumber),
  currentUser:state.auth.currentUser,
};
};

export default connect(mapStateToProps)(Spread);