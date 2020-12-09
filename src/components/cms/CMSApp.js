import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import { LoginComponent } from './LoginComponent';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { ListEmployeeComponent } from './ListEmployeeComponent';
import { WelcomeComponent } from './WelcomeComponent';
import { ErrorComponent } from './ErrorComponent';
import { LogoutComponent } from './LogoutComponent';

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
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />
              <AuthenticatedRoute
                path="/welcome/:name"
                component={WelcomeComponent}
              />
              <AuthenticatedRoute
                path="/employees"
                component={ListEmployeeComponent}
              />
              <Route path="" component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}
