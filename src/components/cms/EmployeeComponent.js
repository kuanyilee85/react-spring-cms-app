import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import React, { Component } from 'react';

export default class EmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstname: 'new',
      lastname: 'new',
      title: 'new',
      department: 'new',
      hireDate: moment(new Date()).format('YYYY-MM-DD'),
      isOnBoard: true,
      note: 'new',
    };
  }
  render() {
    return (
      <div>
        <h1>Employee</h1>
        <div className="container">
          <Formik>
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Firs tname</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="firstname"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Last name</label>
                  <Field className="form-control" type="text" name="lastname" />
                </fieldset>

                <fieldset className="form-group">
                  <label>Title</label>
                  <Field className="form-control" type="text" name="title" />
                </fieldset>

                <fieldset className="form-group">
                  <label>Department</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="department"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Hire date</label>
                  <Field className="form-control" type="date" name="hireDate" />
                </fieldset>

                <fieldset className="form-group">
                  <label>OnBoard</label>
                  <Field
                    className="form-control"
                    type="boolean"
                    name="isOnBoard"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Note</label>
                  <Field className="form-control" type="text" name="note" />
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
