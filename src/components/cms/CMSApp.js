import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

export default class CMSApp extends Component {
  render() {
    return (
      <div className="CMSApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/logout" component={LogoutComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/employees" component={ListEmployeeComponent} />
              <Route path="" component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log('iS USER LOGGED IN? ' + isUserLoggedIn);
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            {isUserLoggedIn ? (
              <a
                href="http://localhost:3000/welcome/Administrator"
                className="navbar-brand">
                CMS App
              </a>
            ) : (
              <a href="http://localhost:3000/login" className="navbar-brand">
                CMS App
              </a>
            )}
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/Administrator">
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/employees">
                  Employees
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthenticationService.logout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All Righted 2020 @CMS App.</span>
      </footer>
    );
  }
}

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: 1,
          firstname: 'Kelly',
          lastname: 'Slater',
          onBoard: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          firstname: 'JohnJohn',
          lastname: 'Florence',
          onBoard: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          firstname: 'Matthew',
          lastname: 'Mcconaughey',
          onBoard: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Employees List</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>firstname</th>
                <th>lastname</th>
                <th>onBoard</th>
                <th>target date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.onBoard.toString()}</td>
                  <td>{employee.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. Manage employees{' '}
          <Link to="/employees">here</Link>.
        </div>
      </>
    );
  }
}

class ErrorComponent extends Component {
  render() {
    return <div>404 Not Found</div>;
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <>
        <h1>You are logged out</h1>
        <div>Thank you for use our Application.</div>
      </>
    );
  }
}

class LoginComponent extends Component {
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
