import Axios from 'axios';

class EmployeeDataService {
  retriveAllEmployee(name) {
    return Axios.get(`http://localhost:8080/users/${name}/employees/`);
  }
}

export default new EmployeeDataService();
