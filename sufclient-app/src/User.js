import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            carType: '',
            host: false
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        axios.get('https://alot-server.herokuapp.com/')
        .then(res => {
            console.log(res)
            this.setState({
            firstName: res.firstName,
            lastName: res.lastName,
            carType: res.carType
        })
        
    })
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {

        return (
            <div>
                <h3> Hello {this.firstName} {this.lastName}</h3>
                <h3>Welcome to your alot. profile!</h3>
                <button>add a vehicle</button>
                <button>host alot.</button>
                <button>edit profile</button>
            </div> 

        )
    }


}

export default User;