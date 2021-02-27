import Axios from 'axios';
import { API_URL, JPA_API_URL } from '../../../Constants';

class EmployeeDataService {
  // GET all
  retriveAllEmployee(name) {
    return Axios.get(`${JPA_API_URL}/users/${name}/employees/`);
  }
  // GET single
  retriveEmployee(name, id) {
    return Axios.get(`${JPA_API_URL}/users/${name}/employees/${id}`);
  }
  // DELETE
  deleteEmployee(name, id) {
    return Axios.delete(`${API_URL}/users/${name}/employees/${id}`);
  }
  // PUT
  updateEmployee(name, id, employee) {
    return Axios.put(`${API_URL}/users/${name}/employees/${id}`, employee);
  }
  // CREATE
  createEmployee(name, employee) {
    return Axios.post(`${API_URL}/users/${name}/employees/`, employee);
  }
}

export default new EmployeeDataService();
