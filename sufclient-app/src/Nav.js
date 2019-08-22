import React, { Component } from "react";
import Search from "./imgs/search.svg";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    let navBarItems = [
      <Link to='/park' className="item" key={1}>
        Park
      </Link>,
      <Link to='/host' className="item" key={2}>
        Host
      </Link>,
      <Link to='/search' className="item" key={3}>
        Search
      </Link>,
      <Link to='/listing' className="item" key={4}>
      Listing
    </Link>
    ];

    if (this.props.isLoggedIn) {
      navBarItems.push(
        <Link to='/logout' className="item" key={5}>
          Log Out
        </Link>
      );
      navBarItems.push(
        <Link to='/profile' className="item" key={6}>
          Profile
        </Link>
      );
    } else {
      navBarItems.push(
        <Link to='/signup' className="item" key={7}>
          Sign Up
        </Link>
      );
      navBarItems.push(
        <Link to='/login' className="item" key={8}>
          Log In
        </Link>
      );
      
    }
    return (
      <div>
        <nav>
            <div className='nav'>
            <div className="left">
            <Link>
                <h1>alot.</h1>
            </Link>
            <div className="input">
              <img className="searchIcon" src={Search} />
              <input type="text" placeholder="Find alot..." />
            </div>
          </div>
          <div className="right">{navBarItems}</div>
            </div>
        
        </nav>
      </div>
    );
  }
}

export default Nav;
