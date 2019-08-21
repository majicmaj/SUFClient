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
        this.setState(this.state.value)
    }

    handleClick = (evt) => {
        evt.preventDefault()
    
        this.validateInputs()
    
      }
    
      validateInputs= () => {
    
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
                    {/* <Calendar format='DD/MM/YYYY' date='4-12-2014' /> */}
                    {/* first Calendar from React */}
                    {/* <Calendar
                onChange = {this.changeStart}
                format='DD/MM/YYYY' date='4-12-2014'
                value={value}/> */}
                    <div className="datepicker">
                        <label>Check-in: </label>
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                        />
                        <label>Check-Out: </label>
                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            minDate={this.state.startDate}
                        />
                    </div>

                    <label>Location: </label>
                    <input type="text" name="Location"></input>
                    <label>Radius: </label>
                    <input type="text" name="Radius"></input>
                    <label>Spaces: </label>
                    <input type="text" name="Spaces"></input>


                    <div className="advancedSearch">
                        <label>Type </label>
                        <input type="text" name="Type"></input>
                        <label>Price </label>
                        <input type="text" name="Price"></input>
                    </div>
                    <button>
                    <input type="submit" onClick={this.handleClick} value="submit" />
                    <p>{validInput}</p>
                    </button>
                </form>
            </div>



        )
    }


}

export default Search;