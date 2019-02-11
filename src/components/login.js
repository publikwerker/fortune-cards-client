import React from 'react';
import { connect } from 'react-redux';
import{ Field, reduxForm, focus } from 'redux-form';
import { toggle_login } from '../actions/index.js';
import { Login } from '../actions/protected.js';
import './login.css';

import {required, nonEmpty} from '../validators';

function submit(values, dispatch, formProps) {
  console.log('onSubmit ran');
  dispatch(toggle_login());
  return dispatch(Login(values.username, values.password));
}

class LoginWindow extends React.Component {
  

  render() {
    let error;
    const {handleSubmit}= this.props;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
          </div>
      );
    }
    if (this.props.login === true){
      return (
        <div className="login-container">
          <form className="form-container"  
            onSubmit={handleSubmit}>
          {error}
          <label className="label">User Name</label>
          <Field component="input"
            name="username"
            label="username"
            type="text"
            className="username"
            validators={[required, nonEmpty]}
          /><br />
          <label className="label">Password</label>
          <Field component="input"
            name="password"
            type="password"
            className="password"
            validate={[required, nonEmpty]}
          /><br />
          <button name="login-button"
            type="submit"
            className="login-button"
            disabled={this.props.pristine || this.props.submitting}
          >Sign In</button>
          </form>
        </div>
      );
    } else return (<div></div>);
  }
}

const loginForm = reduxForm({
  form: 'login',
  onSubmit: submit,
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
  }
)(LoginWindow);

function mapStatetoProps(state){
  return {
    login: state.tarot.login
  };
};

export default connect(mapStatetoProps)(loginForm);