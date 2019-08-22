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
            username: res.data.username,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            carType: res.data.carType,
            location: {
                address: res.data.address,
                city: res.data.city,
                zipCode: res.data.zipcode,
              },
            password: res.data.password
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
                <p>your car is a {this.state.carType}</p>
                {this.state.host}
                <p>your city:</p>
                <h3>Welcome to your alot. profile!</h3>
                <button>vehicle</button>
                <button>delete</button>
                <button>edit profile</button>
            </div> 

        )
    }


}

export default User;