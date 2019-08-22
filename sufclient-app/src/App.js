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

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
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

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
    this.setState({ isLoggedIn: false })
    console.log("logged tf out")
    if ({ isLoggedIn: false }) {
      console.log('trying to redirect')
      this.setRedirect()
      console.log(this.state)
    }
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
        withCredentials: true,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
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
<<<<<<< HEAD
        console.log("logged tf in")
        if ({ isLoggedIn: true }) {
          console.log('trying to redirect')
          console.log("before")
          console.log(this.state.email)
          this.setRedirect()
          console.log("after")
          console.log(this.state.email)
        }
=======
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
>>>>>>> user
      })
      .catch(err => console.log(err))

  }
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Nav isLoggedIn={this.state.isLoggedIn} />
          <div className="body">
            <Switch>
              {this.renderRedirect()}
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
