import Axios from 'axios';

class EmployeeDataService {
  // GET all
  retriveAllEmployee(name) {
    return Axios.get(`http://localhost:8080/users/${name}/employees/`);
  }
  // GET single
  retriveEmployee(name, id) {
    return Axios.get(`http://localhost:8080/users/${name}/employees/${id}`);
  }
  // DELETE
  deleteEmployee(name, id) {
    return Axios.delete(`http://localhost:8080/users/${name}/employees/${id}`);
  }
  // PUT
  updateEmployee(name, id, employee) {
    return Axios.put(
      `http://localhost:8080/users/${name}/employees/${id}`,
      employee
    );
  }
  createEmployee(name, employee) {
    return Axios.post(
      `http://localhost:8080/users/${name}/employees/`,
      employee
    );
  }
}

export default new EmployeeDataService();
