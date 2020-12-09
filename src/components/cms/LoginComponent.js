import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Administrator',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChangle = this.handleChangle.bind(this);
  }

  handleChangle(e) {
    // console.log(e.target.name + ': ' + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  loginClicked() {
    if (
      this.state.username === 'Administrator' &&
      this.state.password === 'dummy'
    ) {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      // this.setState({ hasLoginFailed: false });
      // this.setState({ showSuccessMessage: true });
    } else {
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
  }

  render() {
    return (
      <>
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.showSuccessMessage && <div>Login successful</div>}
          Username:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => {
              this.handleChangle(e);
            }}
          />
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => {
              this.handleChangle(e);
            }}
          />
          <button
            className="btn btn-success ml-1"
            onClick={() => {
              this.loginClicked();
            }}>
            Login
          </button>
        </div>
      </>
    );
  }
}
