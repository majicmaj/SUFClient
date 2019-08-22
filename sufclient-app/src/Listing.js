import React, { Component } from 'react';
import DatePicker from 'react-date-picker'
import axios from "axios";
import { Link } from 'react-router-dom'
import './Listing.css'
import Spot from './imgs/spot.jpg'

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
            .then(res => {
                this.setState({ data: [res.data] })
                console.log(res.data)
            })
    }

    render() {
        console.log("thisss")
        console.log(this.state.data)

        if (this.state.data[0]) {
            var listing = this.state.data[0].map(listing => {
                console.log(listing)
                return (
                    <Link to='/Single list' key={listing._id}><div className='lot'>
                        <img src={Spot} />
                        <p>Rate: ${listing.rate}</p>
                        <p>Address:{listing.location.address},{listing.location.city}</p>
                        <p>Reviews:</p>
                    </div>
                    </Link>

                )
            })
        }

        return (
            <div className="Listing">
                <nav className="filters">
                    <ul>
                        <li placeholder="Type">
                            <DatePicker />
                            <DatePicker />
                        </li>
                        <li placeholder="Type">
                            <select className="dropdown">
                                <option>Bike</option>
                                <option>Motorcycle</option>
                                <option>Car</option>
                                <option>Van</option>
                                <option>Bus</option>
                            </select>
                        </li>
                        <li placeholder="Type">
                            <select className="dropdown">
                                <option>-4</option>
                                <option>5-10</option>
                                <option>11-15</option>
                                <option>15-20</option>
                                <option>+20</option>
                            </select>
                        </li>
                        <li>
                            <button>find <span className='alot'>alot.</span></button>
                        </li>
                    </ul>
                </nav>
                <div className='listingWrapper'>
                    {listing}
                </div>
                {/* <div className="location">
                <div className="container 1"> container 1</div>
                <div className="container 2"> container 2</div>
                <div className="container 3"> container 3</div>
                <div className="container 4"> container 4</div> */}
                {/* </div> */}
                {/* <div className="Singlelisting">{this =>
                return(
                    <Link to='/Singlelisting'>
                        <img src={spot}/>
                    </Link>
                )
                )} </div> */}
            </div>
        )
    }
}

export default Listing;