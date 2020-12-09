import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Hi! <i>{this.props.match.params.name}</i>. Welcome back to Employees
          Management App. <br /> View employees from{' '}
          <Link to="/employees">here</Link>.
        </div>
      </>
    );
  }
}
