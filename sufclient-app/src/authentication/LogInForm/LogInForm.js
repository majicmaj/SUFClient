import React, { Component } from 'react'
import '../SignUpForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div>
        <h2>Log In</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' placegolder='Email address' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <button value='Submit' type='submit' onClick={this.props.handleLogIn}>sign in</button>
        </form>
      </div>
    )
  }
}

export default LogInForm