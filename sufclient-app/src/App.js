import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import axios from 'axios'
import SignUpForm from './authentication/SignUpForm/SignUpForm'
import LogInForm from './authentication/LogInForm/LogInForm'
import LogOut from './authentication/LogOut/LogOut' 
import Listing from './Listing'
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }

    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut () {

  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp (e) {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  handleLogIn (e) {

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home />

        <div>
        <Nav isLoggedIn={this.state.isLoggedIn} />
        <div className='body'>
          <Switch>
            <Route path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />
           <Route path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
               )
             }}
            />
           <Route
              path='/'
              render={() => {
                return (
                  <Listing isLoggedIn={this.state.isLoggedIn} />
                )
             }}
           />
         </Switch>
       </div>
      </div>
    </div>
    
    );
  }
}

export default App;
