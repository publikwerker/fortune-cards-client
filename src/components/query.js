import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {trim_deck}  from '../actions/index.js';
import './query.css';
//import store from './store.js';

class Query extends React.Component {
  render () {
    const { handleSubmit} = this.props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Field component='input' name="spreadNumber" className="spreadNumber" type="number" min={1} max={78}/>
        <button className="deal-button">Deal</button>
      </form>
    </div>
  );
}
}

export default reduxForm({
  form: 'query',
  onSubmit: (values, dispatch) => { 
    dispatch(trim_deck(values.spreadNumber));
    console.log('values: ' + values)}
})(Query);