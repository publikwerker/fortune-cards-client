import React from 'react';
import { connect } from 'react-redux';
import{ Field, reduxForm, focus } from 'redux-form';
import { toggle_signin } from '../actions/index.js';
import { Login } from '../actions/protected.js';
import  Register  from './register.js';

import { required, nonEmpty } from '../validators';

function submit(values, dispatch) {
  console.log('onSubmit ran');
  return dispatch(Login(values.username, values.password));
}

export class LoginWindow extends React.Component {
  render() {
    let error;
    const {dispatch}=this.props;
    function signUp(){
      console.log('signUp ran');
      dispatch(toggle_signin());
    }
    const {handleSubmit}= this.props;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
          </div>
      );
    }
    if (this.props.login === true){
      if (this.props.signIn === true){
        return (
          <Register />
        );
      } else {
        return (
        <div className="login-container">
          <form 
            className="form-container"  
            onSubmit={handleSubmit}>
            {error}
          <button 
            name="newuser-button"
            id="newuser-button"
            type="button"
            className="newuser-button"
            onClick={signUp}
          >Register</button>
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
          <button 
            name="login-button"
            id="login-button"
            type="submit"
            className="login-button"
            disabled={this.props.pristine || this.props.submitting}
          >Sign In</button>
          </form>
        </div>
        );
      }
    } else return (<div></div>);
  }
}

export const loginForm = reduxForm({
  form: 'login',
  onSubmit: submit,
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
  }
)(LoginWindow);

function mapStatetoProps(state){
  return {
    login: state.tarot.login,
    signIn: state.tarot.signIn
  };
}

export default connect(mapStatetoProps)(loginForm);