import React, { Component } from 'react';
import Search from './Search'
import './Home.css'

class Home extends Component {

    render() {

        return (
            <div>
                <h1>There is <span className='alot'>alot.</span> of webpages. this one is not one of them.</h1>
                <h2>Search for something else</h2>
            <Search />
            </div >

        )
    }


}

export default Home;