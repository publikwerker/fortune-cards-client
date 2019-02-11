import React from 'react';
import{ Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/protected.js';
import './login.css';

import {required, nonEmpty} from '../validators';


class Login extends React.Component {
  onSubmit(values) {
    console.log('onSubmit ran')
    return this.props.dispatch(login(values.username, values.password));
  }
  
  render() {
    if (this.props.login === false || !this.props.login)
      {return (
        <div className="login-container">
          <form className="form-container"  onSubmit={
            this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
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
      )} else return (<div></div>)
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
  }
)(Login);