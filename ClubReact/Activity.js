import React from "react";
import ReactDOM from "react-dom";
import actImage from './images/Activites.png'

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    async componentDidMount() {
        console.log("Activities componentDidMount");
        let res = await fetch('/activities');
        let data = await res.json(); 
        console.log(data);
        this.setState({events: data});
    }

    render() {

        let tableRows = this.state.events.map(function(event){
            return <tr key={event._id}><td>{event.name}</td>
                  <td>{event.dates}</td><td>{event.description}</td></tr>;
        });

        return <main>
            <h1>Activities</h1>
            <img src={actImage} alt="Activity" width="400" height="500"></img>
            <p><textarea rows="4" cols="50" placeholder="work in progress"></textarea> </p>
            <table>
                <caption>
                    <p><b>Activity Schedule</b></p>
                </caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody id = "TableBody">
                {tableRows}
                </tbody>
            </table>
        </main>;
    }
}

export default Activities;
