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
        console.log(this.props)
        axios.get("https://alot-server.herokuapp.com/user/email" +"/" + this.props.email)
        .then(res => {
            console.log(res.data)
            this.setState({
            firstName: res.data.email,
            lastName: res.data.location.city,
            carType: res.data.carType
        })
        
    })
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        console.log(this.props)

        return (
            <div>
                <h3> Hello {this.state.firstName} {this.state.lastName}</h3>
                <h3>Welcome to your alot. profile!</h3>
                <button>add a vehicle</button>
                <button>host alot.</button>
                <button>edit profile</button>
            </div> 

        )
    }


}

export default User;