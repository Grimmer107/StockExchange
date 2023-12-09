import React, { Component } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Classes from "./SignupForm.css";

class SignupForm extends Component {

  state = {
    errors: {},
    name: '',
    email: '',
    password: '',
  };

  onChangeHandlerEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangeHandlerPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  onChangeHandlerName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/users", user);
      localStorage.setItem('token', response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const { errors } = { ...this.state };
        errors.message = ex.response.data;
        this.setState({ errors });
      }
    }

  };

  render() {
    return (
      <div className={Classes.signupFormContainer}>
        <h1 className={Classes.signupH1}>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className={Classes.signupFormElements}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { mt: 1, ml: 5, width: '38ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="Name" variant="filled" onChange={this.onChangeHandlerName} />
              <TextField id="filled-basic" label="Email" variant="filled" onChange={this.onChangeHandlerEmail} />
              <TextField id="filled-password-input" label="Password" type="password" onChange={this.onChangeHandlerPassword} autoComplete="current-password" variant="filled"
              />
              <div className={Classes.checkboxDiv}>
                <input className={Classes.checkbox} name="box" type="checkbox" />
                I agree to<a className={Classes.signupAnker} href="/">terms and conditions.</a>
                <br />
              </div>
            </Box>
          </div>
          <div className={Classes.signupError}>
            <p>{this.state.errors.message ? "Error: " + this.state.errors.message : null}</p>
          </div>
          <button className={Classes.btn}>Signup</button>
          <br />
          <div className={Classes.haveAccount}>
            Already have an account?<span><a className={Classes.signupAnker} href="/Login">Login Now!</a></span>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
