import Axios from 'axios';

class EmployeeDataService {
  retriveAllEmployee(name) {
    return Axios.get(`http://localhost:8080/users/${name}/employees/`);
  }
  retriveEmployee(name, id) {
    return Axios.get(`http://localhost:8080/users/${name}/employees/${id}`);
  }
  deleteEmployee(name, id) {
    return Axios.delete(`http://localhost:8080/users/${name}/employees/${id}`);
  }
}

export default new EmployeeDataService();
