import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus } from 'redux-form';
import { toggle_login } from '../actions/index.js';
import { CreateUser, storeAuthInfo2 } from '../actions/protected.js';

import { required, nonEmpty } from '../validators';

export class Register extends React.Component{
  render(){
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
  onSubmit: async (values, dispatch) => {
    const response = await dispatch(CreateUser(values.username, values.password));
    await dispatch(storeAuthInfo2(response))
    await dispatch(toggle_login());
  },
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Register);

function mapStateToProps(state){
  return {
    login: state.tarot.login,
  };
}

export default connect(mapStateToProps)(registerForm);