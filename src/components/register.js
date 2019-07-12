import React from 'react';
import {Field, reduxForm, focus } from 'redux-form';
import { toggle_signin } from '../actions/index.js';
import { CreateUser, Login } from '../actions/protected.js';

import { required, nonEmpty } from '../validators';
import { connect } from 'react-redux';


export class Register extends React.Component{
  render(){
    console.log(this.props);
    const {handleSubmit, error }=this.props;
    let errorBlock = <p className='empty-div'></p>;
    if (error){
      errorBlock = <p className='error-text'>{`Error: ${error.message}`}</p>
    }
    return (
      <div className="register-container">
            <form className="form-container"  
              onSubmit={handleSubmit}>
              {errorBlock}
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
              validators={[required, nonEmpty]}
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
  onSubmit: (values, dispatch) => {
   return dispatch(CreateUser(values.username, values.password))
   .then(() => dispatch(Login(values.username, values.password)))
   .then(() => dispatch(toggle_signin()));
  },
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Register);

function mapStateToProps(state){
  return {
    login: state.tarot.login,
  };
}

export default connect(mapStateToProps)(registerForm);