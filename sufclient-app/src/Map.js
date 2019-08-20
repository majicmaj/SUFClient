import React, { Component } from 'react';

class Map extends Component {
    initMap = (div) => {
        map = new google.map.maps.Map(div), {
            center: {lat: -34, lng: 150},
            zoom: 8
        }
    }

    render() {

        return (
            <div>

            </div>
        )
    }


}

export default Map;