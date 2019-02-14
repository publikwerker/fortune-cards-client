import React from 'react';
import {Field, reduxForm, focus } from 'redux-form';
import { toggle_login, toggle_signin } from '../actions/index.js';
import './register.css';
import { CreateUser, Login } from '../actions/protected.js';

import { required, nonEmpty } from '../validators';
import { connect } from 'react-redux';

function submit(values, dispatch) {
  console.log('onSubmit ran');
  return function(values, dispatch){
    dispatch(CreateUser(values.username, values.password))
    dispatch(toggle_signin());
    dispatch(toggle_login());
}
}
class Register extends React.Component{
  render(){
    let error;
    const {handleSubmit}=this.props;
    return (
      <div className="register-container">
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
            <button name="signup-button"
              type="submit"
              className="signup-button"
              disabled={this.props.pristine || this.props.submitting}
            >Join</button>
            </form>
          </div>
    );
  };
};

const registerForm = reduxForm({
  form: 'register',
  onSubmit: submit,
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Register);

function mapStateToProps(state){
  return {
    login: state.tarot.login,
  };
}

export default connect(mapStateToProps)(registerForm);