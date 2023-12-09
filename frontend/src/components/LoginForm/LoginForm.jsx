import React, { Component } from "react";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Classes from "./LoginForm.css";
import Box from '@mui/material/Box';

class LoginForm extends Component {

  state = {
    errors: {},
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    try {
      const { data: jwt } = await axios.post('http://localhost:5000/api/auth', user);
      localStorage.setItem('token', jwt);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { errors } = { ...this.state };
        errors.message = ex.response.data;
        this.setState({ errors });
      }
    }

  };

  onChangeHandlerEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangeHandlerPassword = (e) => {
    this.setState({ password: e.target.value })
  }


  render() {
    return (
      <div className={Classes.loginFormContainer}>
        <h1 className={Classes.loginH1}>Welcome Back</h1>
        <form onSubmit={this.handleSubmit}>
          <div className={Classes.loginFormElements}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { mt: 2, ml: 5, width: '34ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="Email" variant="filled" onChange={this.onChangeHandlerEmail} />
              <TextField id="filled-password-input" label="Password" type="password" onChange={this.onChangeHandlerPassword} autoComplete="current-password" variant="filled"
              />

            </Box>
            <button className={Classes.btn}>Login</button>
            <div className={Classes.loginError}>
            <p>{this.state.errors.message ? "Error: " + this.state.errors.message : null}</p>
            </div>
            <div class={Classes.loginButtonAnker}>
              <p>Don't have an account?</p>
              <p><a className={Classes.loginAnker} href="/Signup">Signup Now!</a></p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
