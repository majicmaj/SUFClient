import React, { Component } from 'react';
import Search from './imgs/search.svg'
import './Nav.css'

class Main extends Component {

    render() {

        return (
            <nav>
                <div className = 'left'>
                    <h1>alot.</h1>
                    <div className='input'>
                        <img className='searchIcon' src={Search}/>
                        <input type='text' placeholder='Find a spot..' />
                    </div>
                    
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