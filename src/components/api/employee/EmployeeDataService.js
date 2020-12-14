import Axios from 'axios';

class EmployeeDataService {
  retriveAllEmployee(name) {
    return Axios.get(`http://localhost:8080/users/${name}/employees/`);
  }
  deleteEmployee(name, id) {
    return Axios.delete(`http://localhost:8080/users/${name}/employees/${id}`);
  }
}

export default new EmployeeDataService();
