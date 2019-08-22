import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import Axios from 'axios';

class Singlelisting extends Component {

    //button to click event to confirm that the booking has gone through

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.props.active)
        Axios.put("https://alot-server.herokuapp.com/" + this.props._id, { active: false })
            .then(res => {
                console.log(res.data)
        console.log("work")
        console.log(this.props.active)
            
    })
}


    render() {


        // let list = this.props.listing.find(list => {
        //     return 
        // })


        return (
            <div className="list">
                <div className="pic-listing">
                    {/* this will include the picture of the listing once updated in the backend */}
                    <img src="{listing.img}" alt="{listing.name}" />
                </div>
                <div className="description">
                   <Link to='/listing'> <h2>Entire Parking spot</h2></Link>
                    <p>2 parking spaces</p>
                    <Link> <h2>Environment</h2></Link>
                    <p>Sparkling Clean</p>
                    <Link> <h2>Sam Super Host!!!!</h2></Link>
                    <p>lorejfbdalbvdjbadjbfebejebefjbfejbfejbfejbfefqewjkbfqfeubjewjfqebfjbqfqlhjkb</p>
                    <Link><h2>Location</h2></Link>
                    <p>recent guest</p>
                    <Link><h2>ReadMore</h2></Link>
                    <Link><h2>Concact Host</h2></Link>
                </div>
                <div className="Amenities">
                    <h4>Amenities</h4>
                    <p>Power Station</p>
                    <p>Gas station close by</p>
                    <p>wifi</p>
                </div>
                <button className="Reserve" type="button" onClick={this.handleClick}>Reserve</button>
            </div>
        )
    }

}

export default Singlelisting;