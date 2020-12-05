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
    };

    this.handleUsernamechange = this.handleUsernamechange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernamechange(value) {
    console.log('Username: ' + value);
    this.setState({ username: value });
  }

  handlePasswordChange(pwd) {
    console.log('Password: ' + pwd);
    this.setState({ password: pwd });
  }

  render() {
    return (
      <div>
        Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={(e) => {
            this.handleUsernamechange(e.target.value);
          }}
        />
        Password:
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => {
            this.handlePasswordChange(e.target.value);
          }}
        />
        <button>Login</button>
      </div>
    );
  }
}
