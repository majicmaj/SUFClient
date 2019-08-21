import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import axios from "axios";
import SignUpForm from "./authentication/SignUpForm/SignUpForm";
import LogInForm from "./authentication/LogInForm/LogInForm";
import LogOut from "./authentication/LogOut/LogOut";
import Listing from "./Listing";
//So I can see what the form looks like 
import Search from "./Search";
import "./App.css";
import NoMatch from './NoMatch';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    console.log("FIRE!");
    e.preventDefault();
    axios
      .post("https://alot-server.herokuapp.com/user/signup", {
        withCredentials: true,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        console.log("SIGNED TF UP");
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) { }

  render() {
    return (
      <div className="App">
        <div>
          <Nav isLoggedIn={this.state.isLoggedIn} />
          <div className="body">
            <Switch>
              <Route
                path="/signup"
                render={props => {
                  return (
                    <SignUpForm
                      {...props} 
                      isLoggedIn={this.state.isLoggedIn}
                      handleInput={this.handleInput}
                      handleSignUp={this.handleSignUp}
                    />
                  );
                }}
              />
              <Route
                path="/logout"
                render={props => {
                  return (
                    <LogOut
                      {...props}
                      isLoggedIn={this.state.isLoggedIn}
                      handleLogOut={this.handleLogOut}
                    />
                  );
                }}
              />
              <Route
                path="/login"
                render={props => {
                  return (
                    <LogInForm
                      {...props}
                      isLoggedIn={this.state.isLoggedIn}
                      handleInput={this.handleInput}
                      handleLogIn={this.handleLogIn}
                    />
                  );
                }}
              />
              <Route
                exact path="/search"
                render={props => {
                  return <Search {...props} />
                }}
              />
              <Route
                exact path="/"
                render={props => {
                  return <Home {...props} isLoggedIn={this.state.isLoggedIn} />;
                }}
              />
              <Route
                component={NoMatch}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
