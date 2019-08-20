import React, { Component } from "react";
import Search from "./imgs/search.svg";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";

class Nav extends Component {
  render() {
    let navBarItems = [
      <NavItem className="item" key={1} href="/">
        Park
      </NavItem>,
      <NavItem className="item" key={2} href="/">
        Host
      </NavItem>,
      <NavItem className="item" key={3} href="/">
        Help
      </NavItem>
    ];

    if (this.props.isLoggedIn) {
      navBarItems.push(
        <NavItem className="item" key={4} href="/logout">
          Log Out
        </NavItem>
      );
    } else {
      navBarItems.push(
        <NavItem className="item" key={5} href="/signup">
          Sign Up
        </NavItem>
      );
      navBarItems.push(
        <NavItem className="item" key={6} href="/login">
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
              <input type="text" placeholder="Find a spot.." />
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
