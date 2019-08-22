import React, { Component } from "react";
import Search from "./imgs/search.svg";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";

class Nav extends Component {
  render() {
    let navBarItems = [
      <NavItem className="item" key={1} href="/park">
        Park
      </NavItem>,
      <NavItem className="item" key={2} href="/host">
        Host
      </NavItem>,
      <NavItem className="item" key={3} href="/search">
        Search
      </NavItem>,
      <NavItem className="item" key={4} href="/listing">
      Listing
    </NavItem>
    ];

    if (this.props.isLoggedIn) {
      navBarItems.push(
        <NavItem className="item" key={5} href="/logout">
          Log Out
        </NavItem>
      );
      navBarItems.push(
        <NavItem className="item" key={6} href="/profile">
          Profile
        </NavItem>
      );
    } else {
      navBarItems.push(
        <NavItem className="item" key={7} href="/signup">
          Sign Up
        </NavItem>
      );
      navBarItems.push(
        <NavItem className="item" key={8} href="/login">
          Log In
        </NavItem>
      );
      
    }
    return (
      <div>
        <Navbar>
            <div className='nav'>
            <div className="left">
            <h1>alot.</h1>
            <div className="input">
              <img className="searchIcon" src={Search} />
              <input type="text" placeholder="Find alot..." />
            </div>
          </div>
          <div className="right">{navBarItems}</div>
            </div>
        
        </Navbar>
      </div>
    );
  }
}

export default Nav;
