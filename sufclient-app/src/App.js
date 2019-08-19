import React, {Component} from 'react';
import Search from './Search'
import Nav from './Nav'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
