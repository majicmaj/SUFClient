import React, { Component } from 'react';
import Map from './Map'
import './Home.css'

class Home extends Component {

    render() {

        return (
            <div>
                <Map listings={this.props.listings}/>
            </div >

        )
    }


}

export default Home;