import React, { Component } from 'react'

class Singlelisting extends Component {

    //button to click event to confirm that the booking has gone through

    handleClick = (link) => {
        window.location.href = link
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
                    <h2>Entire Parking spot</h2>
                    <p>2 parking spaces</p>
                    <h2>Entire Parking spot</h2>
                    <p>Sparkling Clean</p>
                    <h2>Sam is Superhost</h2>
                    <p>lorejfbdalbvdjbadjbfebejebefjbfejbfejbfejbfefqewjkbfqfeubjewjfqebfjbqfqlhjkb</p>
                    <h2>Location</h2>
                    <p>recent guest</p>
                    <h3>Read</h3>
                </div>
                <div className="Amenities">
                    <h4>Amenities</h4>
                    <p>Power Station</p>
                    <p>Gas station close by</p>
                    <p>wifi</p>
                </div>
                <button>Reserve</button>
            </div>
        )
    }

}

export default Singlelisting;