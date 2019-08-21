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
                <div>
                    <p>Peace at last</p>
                    <p>Get alot. off your mind</p>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="datepicker">
                        <label className="checkin"> Check-In:
                            <DatePicker
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                            /></label>
                        <label className="checkout">Check-Out:
                             <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                minDate={this.state.startDate}
                            /></label>
                    </div>
                    
                    <label className="location">Location:<select ClassName="dropdown" placeholder="Location">
                        <option>China Town</option>
                        <option>Down Town</option>
                        <option>Capitol HIll</option>
                        <option>Dupont Circle</option>
                        <option>Logan Circle</option>
                        <option>Shaw</option>
                        <option>Adams Morgan</option>
                        <option>Columbia Heights</option>
                        </select>
                    <input type="text" name="Location"></input>
                    </label>
                    <label className="radius" >Radius:<select ClassName="dropdown" placeholder="Radius">
                    <option>distance 1</option>
                        <option>distance 2</option>
                        <option>distance 3</option>
                        <option>distance 4</option>
                        <option>distance 5</option>
                        <option>distance 6</option>
                        <option>distance 7</option>
                        <option>distance 8</option>
                        </select> <input type="text" name="Radius" ></input> </label>
                    <label className="spaces">Spaces: <select ClassName="dropdown" placeholder="Spaces"></select> <input type="text" name="Spaces" ></input></label>
                    {/* <div className="advancedSearch">
                        <label>Type <input type="text" name="Type"></input> </label>
                        <label>Price  <input type="text" name="Price"></input> </label>
                    </div> */}
                    <input className="submit" type="submit" onClick={this.handleClick} value="submit" />
                    <p>{validInput}</p>
                </form>
            </div>

        )
    }


}

export default Search;