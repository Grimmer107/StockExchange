import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Classes from './Login.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = {Classes.body}>
          <LoginForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
