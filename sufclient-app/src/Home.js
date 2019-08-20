import React, { Component } from 'react';
import tesla from './imgs/charging.jpeg'
import hourly from './imgs/hourly.jpeg'
import extended from './imgs/extended.jpeg'
import './Home.css'

class Home extends Component {

    render() {

        return (
            <div>
                <h2>What can we help you find? We always have alot.</h2>
                <div className='options'>
                    <div className='option'>
                        <img src={hourly} />
                        <h3>Hourly</h3>
                        <div />
                    </div>
                    <div className='option'>
                        <img src={extended} />
                        <h3>Extended</h3>
                        <div />
                    </div>
                    <div className='option'>
                        <img src={tesla}/>
                        <h3>Charging Station</h3>
                        <div />
                    </div>
                </div>
            </div>

        )
    }


}

export default Home;