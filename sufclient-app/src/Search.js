import React, { Component } from 'react';
// import Calendar from 'react-calendar';
// import Calendar from 'react-input-calendar'
import DatePicker from 'react-date-picker'
import './Search.css'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            location: "",
            radius: "",
            spaces: "",
            type: "",
            price: "",
            input: true


        };
    }

    // changeStart = (e) => {
    //     this.setState({ startDate: e.target.value })
    // }

    onChange = (e) => {
        this.setState({ startDate: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleClick = (evt) => {
        evt.preventDefault()

        this.validateInputs()

    }

    validateInputs = () => {

        if (this.state) {
            this.setState({ Input: true })
        } else {
            this.setState({ Input: false })
        }

    }


    render() {
        // let { value } = this.state.start

        let validInput = this.state.input

        return (
            <div className='search'>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="datepicker">
                        <label> Check-In:
                            <DatePicker
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                            /></label>
                        <label>Check-Out:
                             <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                minDate={this.state.startDate}
                            /></label>
                    </div>
                    <div className="location">
                    <label>Location:
                    <input type="text" name="Location"></input>
                    </label>
                    <label>Radius: <input type="text" name="Radius" ></input> </label>
                    </div>
                    <label>Spaces:  <input type="text" name="Spaces" ></input></label>
                    <div className="advancedSearch">
                        <label>Type <input type="text" name="Type"></input> </label>
                        <label>Price  <input type="text" name="Price"></input> </label>
                    </div>
                    <input className="submit" type="submit" onClick={this.handleClick} value="submit" />
                    <p>{validInput}</p>
                </form>
            </div>

        )
    }


}

export default Search;