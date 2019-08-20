import React, {Component} from 'react';
import Home from './Home'
import Nav from './Nav'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
