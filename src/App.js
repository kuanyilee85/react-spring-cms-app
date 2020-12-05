import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import CMSApp from './components/cms/CMSApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CMSApp />
      </div>
    );
  }
}
export default App;
