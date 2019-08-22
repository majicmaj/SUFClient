import React, { Component } from 'react';
import axios from "axios";
import Singlelisting from './Singlelisting'

// const coindeskURL = 'https://alot-server.herokuapp.com/user/login';

class Listing extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }

    }
    
        componentDidMount() {

            // let url = this.props.match.params.name
            // console.log(url)
            axios.get(`https://alot-server.herokuapp.com/`)
                .then( res => {this.setState({data:[res.data]})
                console.log(res.data)})
        }

    render() {
        console.log("thisss")
        console.log(this.state.data)

        if (this.state.data[0]) {
            var listing = this.state.data[0].map( listing => {
                console.log(listing)
                return(
                    <div key={listing._id} >
                    <p>{listing.rate}</p>
                    <h1>Location</h1>
                    <p>{listing.location.address}</p>
                    <p>{listing.location.city}</p>
                    </div>
            )})
        }

        return (
            <div className="Listing">   
                <nav className="filters">
                    <ul>
                        <li>Dates</li>
                        <li placeholder="Vehicles 1">Vehicles <select className="dropdown">
                            <option>Vehicle 2</option>
                            <option>Vehicle 3</option>
                            <option>Vehicle 4</option>
                        </select></li>
                        <li>{listing}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>price </li>
                        <li>Instant lot</li>
                        </ul>
                        </nav>
                        {/* <div className="location">
                <div className="container 1"> container 1</div>
                <div className="container 2"> container 2</div>
                <div className="container 3"> container 3</div>
                <div className="container 4"> container 4</div> */}
                {/* </div> */}
                <div className="Singlelisting"><Singlelisting /> </div>
            </div>
        )
    }
}   

export default Listing;