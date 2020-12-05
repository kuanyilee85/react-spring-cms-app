import React, { Component } from 'react';

export default class CMSApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'in28minutes',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChangle = this.handleChangle.bind(this);
  }

  handleChangle(e) {
    console.log(e.target.name + ': ' + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  loginClicked() {
    if (
      this.state.username === 'in28minutes' &&
      this.state.password === 'dummy'
    ) {
      console.log('successful');
      this.setState({ hasLoginFailed: false });
      this.setState({ showSuccessMessage: true });
    } else {
      console.log('failed');
      this.setState({ hasLoginFailed: true });
      this.setState({ showSuccessMessage: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
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
          onClick={() => {
            this.loginClicked();
          }}>
          Login
        </button>
      </div>
    );
  }
}
