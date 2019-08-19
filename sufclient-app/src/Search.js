import React, { Component } from 'react';

class Main extends Component {

    render() {

        return (
            <div>
            <form>
                <label>Start date: </label>
                <input type="text" name="Startdate"></input>
                <label>End date: </label>
                <input type="text" name="Enddate"></input>
                <label>Location: </label>
                <input type="text" name="Location"></input>
                <label>Radius: </label>
                <input type="text" name="Radius"></input>
                <label>Spaces: </label>
                <input type="text" name="Spaces"></input>
            </form>
            <footer>
                <form>
                <label>Type </label>
                <input type="text" name="Startdate"></input>
                <label>Price </label>
                <input type="text" name="Enddate"></input>
                </form>
            
            </footer>
            </div>

        )
    }


}

export default Main;