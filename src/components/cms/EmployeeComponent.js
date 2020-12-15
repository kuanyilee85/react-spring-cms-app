import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import React, { Component } from 'react';

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
      isOnBoard: '',
      note: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate(values) {
    let errors = {};
    if (!values.firstname) {
      errors.firstname = 'Enter firstname';
    } else if (values.firstname.length < 5) {
      errors.firstname = 'Enter at least 5 characters in firstname';
    }
    if (!values.lastname) {
      errors.lastname = 'Enter lastname';
    } else if (values.lastname.length < 5) {
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
    if (values.isOnBoard !== 'true' && values.isOnBoard !== 'false') {
      errors.isOnBoard = 'Enter if onboard: true or false';
    }

    return errors;
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    let {
      firstname,
      lastname,
      title,
      department,
      hireDate,
      isOnBoard,
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
              isOnBoard,
              note,
            }}
            onSubmit={this.handleSubmit}
            validate={this.validate}
            validateOnBlur={false}
            validateOnChange={false}>
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
                  name="isOnBoard"
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
                    name="isOnBoard"
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
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
