import React, { Component } from 'react'
import './Home.css'

class Host extends Component {
    render() {
        return (
            <div className='host'>
                <h3>Host a spot, earn <span className='alot'>alot.</span></h3>
                <p>Location</p>
                <input
                    placeholder='City'
                    name='city'
                    onChange={this.props.handleInput}
                />
                <input
                    placeholder='Address'
                    name='address'
                    onChange={this.props.handleInput}
                />
                <input
                    placeholder='Zip Code'
                    name='zipCode'
                    onChange={this.props.handleInput}
                />
                <button
                    value='Submit'
                    placeholder='submit'
                    name='submit'
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default Host
