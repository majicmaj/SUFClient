import React, { Component } from 'react';
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
                input: true
            }


        };
    }


    // onChange = (e) => {
    //     this.setState({ startDate: e.target.value })
    // }

    handleSubmit = (e) => {
        alert(this.state.form)
        e.preventDefault()
        console.log("submit")
    }

    // handleClick = (evt) => {
    //     evt.preventDefault();
    //     console.log("button works")
    // }


    render() {


        return (
            <div className='search'>
                
                    <p>Get <span className='alot'>alot.</span> off your mind</p>

                <form className="form">
                    <fieldset>
                        <div className="datepicker">
                            <label className="checkin"> CHECK-IN
                           <div className="calendar"><DatePicker
                                    selected={this.state.startDate}
                                    selectsStart
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeStart}
                                /></div></label>
                            <label className="checkout">CHECK-OUT
                            <div className="calendar"><DatePicker
                                    selected={this.state.endDate}
                                    selectsEnd
                                    startDate={this.state.startDate}
                                    endDate={this.state.endDate}
                                    onChange={this.handleChangeEnd}
                                    minDate={this.state.startDate}
                                /></div></label>
                        </div>

                        <label className="location">Location:<select ClassName="dropdown">
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
                        <label className="radius" >Radius:<select ClassName="dropdown" >
                            <option>distance 1</option>
                            <option>distance 2</option>
                            <option>distance 3</option>
                            <option>distance 4</option>
                            <option>distance 5</option>
                            <option>distance 6</option>
                            <option>distance 7</option>
                            <option>distance 8</option>
                        </select> <input type="text" name="Radius" ></input> </label>
                        <label className="spaces">Spaces: <select ClassName="dropdown" ></select> <input type="text" name="Spaces" ></input></label>
                    </fieldset>
                    {/* <fieldset>Advance Search
                        <label>Type <input type="text" name="Type"></input> </label>
                        <label>Price  <input type="text" name="Price"></input> </label>
                    </fieldset> */}
                    <button className="submit" type="submit" onClick={this.handleSubmit} >Search</button>

                </form>
            </div>

        )
    }


}

export default Search;