import React, { Component } from 'react';
import './Nav.css'

class Main extends Component {

    render() {

        return (
            <nav>
                <div className = 'left'>
                    <h1>alot.</h1>
                    <input />
                </div>
                <div className='right'>
                    <li>park</li>
                    <li>host</li>
                    <li>history</li>
                    <li>help</li>
                    <li>profile</li>
                </div>
            </nav>

        )
    }


}

export default Main;