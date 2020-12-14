import React, { Component } from 'react';
import EmployeeDataService from '../api/employee/EmployeeDataService';
import AuthenticationService from './AuthenticatedRoute';

export class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        // make state empty initially
        // {
        //   id: 1,
        //   firstname: 'Kelly',
        //   lastname: 'Slater',
        //   title: 'engineer',
        //   department: 'engineering',
        //   hireDate: new Date(),
        //   onBoard: true,
        //   note: 'package a',
        // },
        // {
        //   id: 2,
        //   firstname: 'JohnJohn',
        //   lastname: 'Florence',
        //   title: 'tech lead',
        //   department: 'engineering',
        //   hireDate: new Date(),
        //   onBoard: false,
        //   note: 'package b',
        // },
        // {
        //   id: 3,
        //   firstname: 'Matthew',
        //   lastname: 'Mcconaughey',
        //   title: 'manager',
        //   department: 'human resource',
        //   hireDate: new Date(),
        //   onBoard: false,
        //   note: 'package c',
        // },
      ],
    };
  }

  // make API call after component is created
  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName;
    EmployeeDataService.retriveAllEmployee(username).then((Response) => {
      // return console.log(Response);
      this.setState({ employees: Response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Employee List</h1>
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
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.title}</td>
                  <td>{employee.department}</td>
                  <td>{employee.hireDate.toString()}</td>
                  <td>{employee.onBoard.toString()}</td>
                  <td>{employee.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
