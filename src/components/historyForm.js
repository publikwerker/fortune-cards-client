import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveHistorySuccess, saveHistoryRequest, addReadingToHistory } from '../actions/protected.js';

function submit(values, dispatch){
  console.log(values);
  dispatch(saveHistoryRequest());
  dispatch(addReadingToHistory(values))
  .then(dispatch(saveHistorySuccess()));
}

export class HistoryForm extends React.Component {
  render(){
    console.log(this.props);
    console.log(this.props.currentUser);
    console.log(this.props.cardsDealt);
    let error; 
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
          </div>
      );
    }
    let historyForm=<div></div>;
    const { handleSubmit }=this.props;
    //display the comment and save form
    if (this.props.cardsDealt){
      console.log('cards Dealt');
      if (this.props.currentUser === null){
        historyForm =<div>
        <h3>Sign in to save your readings!</h3>
      </div>
      } else {
        historyForm =<div className="history-form">
          <form
            className="history-form" 
            onSubmit= { handleSubmit }>
            {error}
            <label>Comments:</label>
            <Field component="input"
              name="comments"
              type="text"
              className="comments"
              placeholder="We'll see..."
            />
            <button
                name="saveHistory"
                className="save-history"
                id="save-history"
                type="submit"
              >Save</button>
            </form>
          </div>
        }
      } else {
        return <div></div>
      }
  return historyForm;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cardsDealt:state.tarot.cardsDealt,
    currentUser:state.auth.currentUser,
  };
}

HistoryForm  = reduxForm({
  form: 'save',
  onSubmit: submit,
})(HistoryForm);

export default connect(mapStateToProps)(HistoryForm);