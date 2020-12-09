import React, { Component } from 'react';

export class ListEmployeeComponent extends Component {
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
        <h1>Employee List</h1>
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
