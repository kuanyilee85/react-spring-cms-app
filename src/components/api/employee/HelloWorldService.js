import Axios from 'axios';

class HelloWorldService {
  executeHelloWorldService() {
    // console.log('executed service');
    return Axios.get('http://localhost:8080/hello-world/');
  }
  executeHelloWorldBeanService() {
    return Axios.get('http://localhost:8080/hello-world-bean/');
  }
  executeHelloWorldPathVariableService(name) {
    return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}

export default new HelloWorldService();
