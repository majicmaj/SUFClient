import React, {Component} from 'react';
// import logo from './logo.svg';
import Search from './Search'
import Map from './Map'
import Listing from './Listing'
// import './App.css';

class App extends Component{

render () {
  return (
    <div className="App">
      <div>
        <span></span>
        <Search>Search</Search>
        <span></span>
        <Map>Map</Map>
        <span></span>
        <Listing>Listing</Listing> 
      </div>
      {/* <div>
      {/* {/* <Router></Router> */}
      {/* <Router></Router>
      <Router></Router>
      </div> */}
    </div>
  );
}
}

export default App;
