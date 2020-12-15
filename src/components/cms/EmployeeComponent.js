import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import React, { Component } from 'react';
import EmployeeDataService from '../api/employee/EmployeeDataService';
import AuthenticationService from './AuthenticationService';

export default class EmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstname: '',
      lastname: '',
      title: '',
      department: '',
      hireDate: moment(new Date()).format('YYYY-MM-DD'),
      onBoard: '',
      note: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  // get Employee data from backend by API
  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }

    let username = AuthenticationService.getLoggedInUserName();
    EmployeeDataService.retriveEmployee(username, this.state.id).then(
      (response) =>
        // console.log(response)
        this.setState({
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          title: response.data.title,
          department: response.data.department,
          hireDate: moment(response.data.hireDate).format('YYYY-MM-DD'),
          onBoard: response.data.onBoard,
          note: response.data.note,
        })
    );
  }

  validate(values) {
    let errors = {};
    if (!values.firstname) {
      errors.firstname = 'Enter firstname';
    } else if (values.firstname.length < 3) {
      errors.firstname = 'Enter at least 5 characters in firstname';
    }
    if (!values.lastname) {
      errors.lastname = 'Enter lastname';
    } else if (values.lastname.length < 3) {
      errors.lastname = 'Enter at least 5 characters in lastname';
    }
    if (!values.title) {
      errors.title = 'Enter title';
    } else if (values.title.length < 5) {
      errors.title = 'Enter at least 5 characters in title';
    }
    if (!values.department) {
      errors.department = 'Enter department';
    } else if (values.department.length < 5) {
      errors.department = 'Enter at least 5 characters in department';
    }
    if (!values.note) {
      errors.note = 'Enter note';
    } else if (values.note.length < 5) {
      errors.note = 'Enter at least 5 characters in note';
    }
    if (!moment(values.hireDate).isValid()) {
      errors.hireDate = 'Enter a valid Hire Date';
    }
    if (values.onBoard !== 'true' && values.onBoard !== 'false') {
      errors.onBoard = 'Enter if onboard: true or false';
    }

    return errors;
  }

  // sumbit the PUT request to backend
  handleSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();

    let requestBody = {
      id: this.state.id,
      firstname: values.firstname,
      lastname: values.lastname,
      title: values.title,
      department: values.department,
      hireDate: values.hireDate,
      note: values.note,
      onBoard: values.onBoard,
    };

    if (this.state.id === -1) {
      EmployeeDataService.createEmployee(username, requestBody).then(() =>
        this.props.history.push('/employee')
      );
    } else {
      EmployeeDataService.updateEmployee(
        username,
        this.state.id,
        requestBody
      ).then(() => this.props.history.push('/employee'));
    }
  }

  render() {
    let {
      firstname,
      lastname,
      title,
      department,
      hireDate,
      onBoard,
      note,
    } = this.state;

    return (
      <div>
        <h1>Employee</h1>
        <div className="container">
          <Formik
            // setup initial value for Formik
            initialValues={{
              firstname,
              lastname,
              title,
              department,
              hireDate,
              onBoard,
              note,
            }}
            onSubmit={this.handleSubmit}
            validate={this.validate}
            validateOnBlur={false}
            validateOnChange={false}
            enableReinitialize={true}>
            {(props) => (
              <Form>
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="department"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="hireDate"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="onBoard"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="note"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Firs tname</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="firstname"
                    placeholder="Enter First Name"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Last name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Title</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Department</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="department"
                    placeholder="Enter Department"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Hire date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="hireDate"
                    placeholder="Choose Hire Date"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>OnBoard</label>
                  <Field
                    className="form-control"
                    type="boolean"
                    name="onBoard"
                    placeholder="If employee onboard?"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Note</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="note"
                    placeholder="Notes"
                  />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-outline-primary ml-2"
                  onClick={() => this.props.history.push('/employee')}>
                  Cancel
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
