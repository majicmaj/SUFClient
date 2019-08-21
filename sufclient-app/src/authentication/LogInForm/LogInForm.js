import React, { Component } from 'react'
import '../SignUpForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div>
        <p>Welcome back to <span className='alot'>alot.</span></p>
        <form>
          <div>
            <input type='text' name='email' placeholder='Email address' onChange={this.props.handleInput} />
          </div>
          <div>
            <input type='password' name='password' placeholder='Create a password' onChange={this.props.handleInput} />
          </div>
          <p className='disclaimer'>disclaimer: lorem <span className='alot'>alot.</span> you are going to be handeling more amounts of awesome than a single person can handle. make sure you share the awesome with others so that you are not overwhelmed. Remember to have <span className='alot'>alot.</span> of fun</p>
          <button value='Submit' type='submit' onClick={this.props.handleLogIn}>sign in</button>
        </form>
      </div>
    )
  }
}

export default LogInForm