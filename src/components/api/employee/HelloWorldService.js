import Axios from 'axios';
import { JPA_API_URL } from '../../../Constants';

class HelloWorldService {
  executeHelloWorldService() {
    // console.log('executed service');
    return Axios.get(`${JPA_API_URL}/hello-world/`);
  }
  executeHelloWorldBeanService() {
    return Axios.get(`${JPA_API_URL}/hello-world-bean/`);
  }
  executeHelloWorldPathVariableService(username) {
    return Axios.get(`${JPA_API_URL}/hello-world/path-variable/${username}`);
  }
}

export default new HelloWorldService();
