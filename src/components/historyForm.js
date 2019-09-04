import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveHistorySuccess, saveHistoryRequest, addReadingToHistory } from '../actions/protected.js';

export class HistoryForm extends React.Component {
  currentUser = this.props.currentUser;
  render(){
    let currentUser = this.props.params.currentUser;
    let cardsDealt = this.props.params.cardsDealt;
    let error; 
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
          </div>
      );
    }
    let historyForm=<div className="empty-div"></div>;
    const { handleSubmit }=this.props;
    //display the comment and save form
    if (cardsDealt.length){
      if (currentUser === null){
        historyForm =<div className="login-prompt">
        <h3>Sign in to save your readings!</h3>
      </div>
      } else {
        historyForm =<div className="history-form-container">
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
              autoComplete="off"
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

HistoryForm  = reduxForm({
  form: 'save',
  onSubmit: (values, dispatch) => { 
    dispatch(saveHistoryRequest());
    dispatch(addReadingToHistory(values))
    .then(dispatch(saveHistorySuccess()));
  }
})(HistoryForm);

export default connect()(HistoryForm);