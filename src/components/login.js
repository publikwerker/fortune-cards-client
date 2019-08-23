import React from 'react';
import { connect } from 'react-redux';
import{ Field, reduxForm } from 'redux-form';
import { toggle_signin } from '../actions/index.js';
import { Login } from '../actions/protected.js';
import  Register  from './register.js';

import { required, nonEmpty, isTrimmed } from '../validators';

export class LoginWindow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...props
    }
  }
  render() {
    const { dispatch, handleSubmit } = this.props;
    function signUp(){
      dispatch(toggle_signin());
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
            validators={[required, nonEmpty, isTrimmed]}
          /><br />
          <label className="label">Password</label>
          <Field component="input"
            name="password"
            type="password"
            className="password"
            validators={[required, nonEmpty, isTrimmed]}
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
    } else return (<div className="empty-div"></div>);
  }
}

function mapStatetoProps(state){
  return {
    error: state.auth.error,
    login: state.tarot.login,
    signIn: state.tarot.signIn
  };
}

const loginForm  = reduxForm({
  form: 'login',
  onSubmit: (values, dispatch) => {
    dispatch(Login(values.username, values.password));
  }
})(LoginWindow);

export default connect(mapStatetoProps)(loginForm);