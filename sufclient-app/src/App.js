<<<<<<< HEAD
import React, {Component} from 'react';
// import logo from './logo.svg';
import Search from './Search'
import Map from './Map'
import Listing from './Listing'
// import './App.css';
=======
import React from 'react';
import Search from './Search'
import Nav from './Nav'
import './App.css';
>>>>>>> 1f14552d73f5aef974ff8871b3b926a456e6e52a

class App extends Component{

render () {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <Nav />
      <Search />
>>>>>>> 1f14552d73f5aef974ff8871b3b926a456e6e52a
    </div>
  );
}
}

export default App;
