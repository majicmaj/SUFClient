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
                            <option>Capitol Hill</option>
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
                    <div>
                        {this.renderRedirect()}
                        <button className="submit" type="submit" onClick={this.setRedirect} >Search</button>
                    </div>

                </form>
            </div>

        )
    }


}

export default Search;