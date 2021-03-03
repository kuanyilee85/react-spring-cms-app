import Axios from 'axios';
import { JPA_API_URL } from '../../../Constants';

class EmployeeDataService {
  // GET all
  retriveAllEmployee(username) {
    return Axios.get(`${JPA_API_URL}/jpa/users/${username}/employees/`);
  }
  // GET single
  retriveEmployee(username, id) {
    return Axios.get(`${JPA_API_URL}/jpa/users/${username}/employees/${id}`);
  }
  // DELETE
  deleteEmployee(username, id) {
    return Axios.delete(`${JPA_API_URL}/jpa/users/${username}/employees/${id}`);
  }
  // PUT
  updateEmployee(username, id, employee) {
    return Axios.put(
      `${JPA_API_URL}/jpa/users/${username}/employees/${id}`,
      employee
    );
  }
  // CREATE
  createEmployee(username, employee) {
    return Axios.post(
      `${JPA_API_URL}/jpa/users/${username}/employees/`,
      employee
    );
  }
}

export default new EmployeeDataService();
