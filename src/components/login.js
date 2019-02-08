'use strict';
import React from 'react';
import{ Field, reduxForm } from 'redux-form';
import { handle_login } from '../actions/protected.js';
import { toggle_login } from '../actions/index.js';


class Login extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit }>
        <Field component="input"
          name="username"
          type="text"
          className="username"
        />
        <Field component="input"
          name="password"
          type="password"
          className="password"
        />
        <button className="login-button">login</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmit: (values, dispatch) => {
    dispatch(handle_login(values.username, values.password));
  }
})(Login);