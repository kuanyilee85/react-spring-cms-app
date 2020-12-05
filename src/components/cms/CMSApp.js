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

    this.handleChangle = this.handleChangle.bind(this);
  }

  handleChangle(e) {
    console.log(e.target.name + ': ' + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
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
        <button>Login</button>
      </div>
    );
  }
}
