import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class CMSApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/employees" component={ListEmployeeComponent} />
              <Route path="" component={ErrorComponent} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, firstname: 'Kelly', lastname: 'Slater' },
        { id: 2, firstname: 'JohnJohn', lastname: 'Florence' },
        { id: 3, firstname: 'Matthew', lastname: 'Mcconaughey' },
      ],
    };
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>firstname</th>
              <th>lastname</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome {this.props.match.params.name}</div>;
  }
}

class ErrorComponent extends Component {
  render() {
    return <div>404 Not Found</div>;
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
