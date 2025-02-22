import React, { Component } from 'react';
import axios from 'axios';
import './User.css'

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
        axios.get("https://alot-server.herokuapp.com/user/email" + "/" + this.props.email)
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
                <h3>Hello, {this.state.firstName} {this.state.lastName}</h3>
                <div className='cars'>
                    <h3>Cars:</h3>
                    <p>{this.state.carType}</p>
                </div>
                <h3>Welcome to your alot. profile!</h3>
                <div>

                    <select className="dropdown" name='carType' onChange={this.props.handleInput}>
                        <option>Kia Rio</option>
                        <option>Mustang</option>
                        <option>The bat mobile</option>
                        <option>Tesla</option>
                        <option>Toytoa Camry</option>
                        <option>The horse from old town road</option>
                    </select>

                    <input className='input carfield' type='text' name='carType' onChange={this.props.handleInput}></input>
                    <button onClick={this.props.handleUpdate}>vehicle</button>
                </div>
                <button onClick={this.props.handleRemove}>delete</button>
            </div>

        )
    }


}

export default User;