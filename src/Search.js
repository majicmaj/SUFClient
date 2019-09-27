import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker'
import './Search.css'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            form: {
                startDate: new Date(),
                endDate: new Date(),
                location: "",
                radius: "",
                spaces: "",
                type: "",
                price: "",
                input: true,
                redirect: false
            }


        };
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })

    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/listing' />
        }
    }

    handleSubmit = (e) => {
        alert(this.state.form)
        e.preventDefault()
        console.log("submit")
    }

    handleOnClick = () => {
        this.setState({ redirect: true })
        console.log("button works")
    }

    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect push to='/listing' />;
    //     }
    //     return <button onClick={this.handleOnClick} type></button>
    // }


    render() {


        return (
            <div className='search'>

                <p>Get <span className='alot'>alot.</span> off your mind</p>

                <fieldset>
                    <div className="datepicker">

                    </div>
                    <label className="checkin"> Check-in</label>
                    <select className="dropdown">
                        <option>1:00am</option>
                        <option>2:00am</option>
                        <option>3:00am</option>
                        <option>4:00am</option>
                        <option>5:00am</option>
                        <option>6:00am</option>
                        <option>7:00am</option>
                        <option>8:00am</option>
                        <option>9:00am</option>
                        <option>10:00am</option>
                        <option>11:00am</option>
                        <option>12:00am</option>
                        <option>1:00pm</option>
                        <option>2:00pm</option>
                        <option>3:00pm</option>
                        <option>4:00pm</option>
                        <option>5:00pm</option>
                        <option>6:00pm</option>
                        <option>7:00pm</option>
                        <option>8:00pm</option>
                        <option>9:00pm</option>
                        <option>10:00pm</option>
                        <option>11:00pm</option>
                        <option>12:00pm</option>
                    </select>
                    <select className="dropdown">
                        <option>1:00am</option>
                        <option>2:00am</option>
                        <option>3:00am</option>
                        <option>4:00am</option>
                        <option>5:00am</option>
                        <option>6:00am</option>
                        <option>7:00am</option>
                        <option>8:00am</option>
                        <option>9:00am</option>
                        <option>10:00am</option>
                        <option>11:00am</option>
                        <option>12:00am</option>
                        <option>1:00pm</option>
                        <option>2:00pm</option>
                        <option>3:00pm</option>
                        <option>4:00pm</option>
                        <option>5:00pm</option>
                        <option>6:00pm</option>
                        <option>7:00pm</option>
                        <option>8:00pm</option>
                        <option>9:00pm</option>
                        <option>10:00pm</option>
                        <option>11:00pm</option>
                        <option>12:00pm</option>
                    </select>
                    <p>Address</p>
                    <input type='text' placeholder='1458 Dr' />
                    <select className="dropdown">
                        <option>Washington, DC</option>
                    </select>
                    <input type='number' placeholder='zipcode' />
                    <p>Radius</p>
                    <select ClassName="dropdown" >
                        <option>1 Mile</option>
                    </select> 
                    <input type="text" name="Radius"/>

                    <p>Spaces</p>
                    <select ClassName="dropdown" ></select>
                    <input type="text" name="Spaces"/ >
                    
                </fieldset>
                {/* <fieldset>Advance Search
                        <label>Type <input type="text" name="Type"></input> </label>
                        <label>Price  <input type="text" name="Price"></input> </label>
                    </fieldset> */}
                <div>
                    {this.renderRedirect()}
                    <button className="submit" type="submit" onClick={this.setRedirect} >Search</button>
                </div>
            </div>

        )
    }


}

export default Search;