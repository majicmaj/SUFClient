import React, { Component } from 'react';
import Map from './Map'
import './Home.css'

class Home extends Component {

    render() {
        console.log(this.props)

        return (
            <div>
                <h1>{this.props.isLoggedIn}</h1>
                <Map listings={this.props.listings}/>
                
            </div >

        )
    }


}

export default Home;