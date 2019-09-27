import React, { Component } from 'react';
import Axios from 'axios'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Home.css'

export class MapContainer extends Component {

    constructor() {
        super()

        this.state = {
            selectedPlace: { name: '' },
            data: []
        }
    }

    componentDidMount() {

        // let url = this.props.match.params.name
        // console.log(url)
        Axios.get(`https://alot-server.herokuapp.com/`)
            .then(res => {
                this.setState({ data: [res.data] })
                console.log(res.data[0])
            })
    }

    render() {

        const style = {
            width: '100%',
            height: '100%'
        }
        let listings = []

        if (this.state.data[0]) {
            this.state.data[0].map(listing => {
                listings.push(
                    <Marker onClick={this.onMarkerClick}
                        name={listing.address} />
                )
            })
        }
        console.log(process.env)
        return (
            <div>
                <p>Mode: {process.env.mode}</p>
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: 38.894885,
                        lng: -77.031907
                    }}
                    zoom={17}
                >

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                    {listings}

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div >

        )
    }


}

export default GoogleApiWrapper({
    apiKey: (process.env.key) || ''
})(MapContainer)