import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/employee/HelloWorldService';

export class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: '',
    };
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Hi! <i>{this.props.match.params.name}</i>. Welcome back to Employee
          Management App. <br /> View employee from{' '}
          <Link to="/employee">here</Link>.
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldBeanService().then((Response) =>
      // console.log(Response)
      this.handleSuccessfulResponse(Response)
    );
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then((Response) =>
        // console.log(Response)
        this.handleSuccessfulResponse(Response)
      )
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulResponse(Response) {
    console.log(Response);
    this.setState({ welcomeMessage: Response.data.message });
  }
  handleError(error) {
    console.log(error.response);
    let errorMessage = '';

    if (error.message) {
      errorMessage += error.message;
    }

    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  }
}
