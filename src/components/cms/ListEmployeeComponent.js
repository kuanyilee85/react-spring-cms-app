import React, { Component } from 'react';
import EmployeeDataService from '../api/employee/EmployeeDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

export class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // make state empty initially
      employees: [],
      message: null,
    };
    this.refreshEmployee = this.refreshEmployee.bind(this);
    this.handleEmployeeDelete = this.handleEmployeeDelete.bind(this);
    this.handleEmployeeUpdate = this.handleEmployeeUpdate.bind(this);
    this.handleEmployeeCreate = this.handleEmployeeCreate.bind(this);
  }

  // make API call after component is created
  componentDidMount() {
    this.refreshEmployee();
  }

  // Sent DELETE request to backend
  refreshEmployee() {
    let username = AuthenticationService.getLoggedInUserName();
    EmployeeDataService.retriveAllEmployee(username).then((response) => {
      this.setState({ employees: response.data });
    });
  }

  // handle DELETE button clicked
  handleEmployeeDelete(id) {
    let username = AuthenticationService.getLoggedInUserName();
    EmployeeDataService.deleteEmployee(username, id).then((response) => {
      this.setState({ message: `Delete of employee ${id} Successful` });
      this.refreshEmployee();
    });
  }

  // handle UPDATE button clicked
  handleEmployeeUpdate(id) {
    // console.log(username + ', ' + id);
    this.props.history.push(`/employee/${id}`);
  }

  // handle CREATE button clicked
  handleEmployeeCreate() {
    // id => -1 means create new employee
    this.props.history.push(`/employee/-1`);
  }

  render() {
    return (
      <div>
        <h1>Employee List</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Title</th>
                <th>Department</th>
                <th>Hire Date</th>
                <th>OnBoard</th>
                <th>Note</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.title}</td>
                  <td>{employee.department}</td>
                  <td>{moment(employee.hireDate).format('YYYY-MM-DD')}</td>
                  <td>{employee.onBoard.toString()}</td>
                  <td>{employee.note}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.handleEmployeeUpdate(employee.id)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.handleEmployeeDelete(employee.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button
              className="btn btn-success"
              onClick={() => this.handleEmployeeCreate()}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
