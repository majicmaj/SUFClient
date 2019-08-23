import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
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
import User from './User'
import Singlelisting from "./Singlelisting";

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      listing_id: "",
      isLoggedIn: false,
      firstName: "",
      lastName: "",
      username: "",
      city: "",
      zipcode: 0,
      address: "",
      redirect: false
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

  handleLogOut = () => {
    console.log('IM BEING CALLED')
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    console.log("ASFASFSAF");
    console.log(this.state)
    e.preventDefault();
    axios
      .post("https://alot-server.herokuapp.com/user/signup", {
        email: this.state.email,
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        location: {
          address: this.state.address,
          city: this.state.city,
          zipCode: this.state.zipcode,
        },
        password: this.state.password,
      })
      .then(response => {
        localStorage.token = response.data.token;
        console.log(response.data)
        this.setState({
          isLoggedIn: true,
        });
        console.log("SIGNED TF UP");
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    console.log("log in my dude")
    e.preventDefault()
    axios.post('https://alot-server.herokuapp.com/user/login', {
      withCredentials: true,
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true
        })
        this.props.history.push("/");
        // console.log("logged tf in")
        // if ({isLoggedIn: true}) {
        //   // console.log('trying to redirect')
        //   // console.log("before")
        //   console.log(this.state.email)
        //   this.setRedirect()
        //   // console.log("after")
        //   console.log(this.state.email)
        // }
      })
      .catch(err => console.log(err))

  }
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = () => {
    console.log('REDIRECT')
    if (this.state.redirect) {
      console.log('REDIRECT')
      return <Redirect to='/' />
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div>
          <Nav isLoggedIn={this.state.isLoggedIn} />
          <div className="body">
            {this.renderRedirect()}
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
                exact path="/listing"
                render={props => {
                  return <Listing {...props} />
                }}
              />
              <Route
                exact path="/Singlelist"
                render={props => {
                  return <Singlelisting {...props} />
                }}
              />
              <Route
                exact path="/"
                render={props => {
                  return <Home {...props} theState={this.state} isLoggedIn={this.state.isLoggedIn} />;
                }}
              />
              <Route
                exact path="/profile"
                render={props => {
                  return <User isLoggedIn={this.state.isLoggedIn} email={this.state.email}  {...props} />
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

export default withRouter(App);
