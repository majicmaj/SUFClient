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
            endDate: "",
            location: "",
            radius: "",
            spaces: "",
            type: "",
            price: "",

        };
    }

    // changeStart = (e) => {
    //     this.setState({ startDate: e.target.value })
    // }

    onChange = (e) => {
        this.setState({ startDate: e.target.value })
    }


    render() {
        // let { value } = this.state.start

        return (
            <div className='search'>
                <form className="form">
                    {/* <Calendar format='DD/MM/YYYY' date='4-12-2014' /> */}
                    {/* first Calendar from React */}
                    {/* <Calendar
                onChange = {this.changeStart}
                format='DD/MM/YYYY' date='4-12-2014'
                value={value}/> */}
                    <label>Start date: </label>
                    <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    />
    <label>End date: </label>
                    <DatePicker
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        minDate={this.state.startDate}
                    />

                    <label>Location: </label>
                    <input type="text" name="Location"></input>
                    <label>Radius: </label>
                    <input type="text" name="Radius"></input>
                    <label>Spaces: </label>
                    <input type="text" name="Spaces"></input>
                </form>
                <footer>
                    <form className="advancedSearch">
                        <label>Type </label>
                        <input type="text" name="Type"></input>
                        <label>Price </label>
                        <input type="text" name="Price"></input>
                    </form>
                </footer>
            </div>

        )
    }


}

export default Search;