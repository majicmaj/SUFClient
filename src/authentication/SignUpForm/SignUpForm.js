import React, { Component } from 'react'

import '../SignUpForm.css'

class SignUpForm extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Sign up and get <span className='alot'>alot.</span></p>

        <form>

          <input type='text' placeholder='Create a Username' name='username' onChange={this.props.handleInput} />

          <input type='text' placeholder='Email address' name='email' onChange={this.props.handleInput} />

          <input type='name' placeholder='First name' name='firstName' onChange={this.props.handleInput} />

          <input type='name' placeholder='Last name' name='lastName' onChange={this.props.handleInput} />

          <input type='text' placeholder='Address' name='address' onChange={this.props.handleInput} />

          <input type='text' placeholder='City' name='city' onChange={this.props.handleInput} />

          <input type='number' placeholder='Zip code' name='zipcode' onChange={this.props.handleInput} />

          <p className='disclaimer'>don't use a real password because we store it curently</p>

          <input type='password' name='password' placeholder='Create a Password' onChange={this.props.handleInput} />
          <p className='disclaimer'>disclaimer: by signing up for <span className='alot'>alot.</span> you are going to be handeling more amounts of awesome than a single person can handle. make sure you share the awesome with others so that you are not overwhelmed. Remember to have <span className='alot'>alot.</span> of fun</p>
          <button value='Submit' type='submit' onClick={this.props.handleSignUp} >sign up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm
