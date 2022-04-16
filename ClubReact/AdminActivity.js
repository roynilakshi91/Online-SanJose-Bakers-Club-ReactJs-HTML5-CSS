import React from "react";
import ReactDOM from "react-dom";
import events from "./eventData.json"

class ManageActivities extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { name: "", dates: "", description: "", events: events};
    }

    submitActivity() {
        // In a real application we'd actually send data to a server here
        // But all we'll do here is show the welcome/thanks dialog
        let eventsJson = this.state.events;
        eventsJson.push({name: this.state.name, dates: [this.state.dates], description: this.state.description});
        this.setState({ name: "", dates: "", description: "", events: eventsJson});
    }

    submitDelete(event) {
        let eventsJson = this.state.events;
        let idx = eventsJson.findIndex(item=>item.name == event.name );
        eventsJson.splice(idx, 1);
        this.setState({events: eventsJson});
    }

    render() {
        let createTableRowFunc = function(obj) {
            return function(event) {
                return <tr><td><button type="button" onClick={obj.submitDelete.bind(obj, event)} >Delete</button></td><td>{event.name}</td>
                  <td>{event.dates}</td><td>{event.description}</td></tr>;
            };
        };

        let tableRows = this.state.events.map(createTableRowFunc(this));

        return <main>
            <h1>Activity Management</h1>

            <form id="form" className="wrapper">
            <label>Name:</label>
            <input type="text" id="name" name="name"
             required minLength="6" maxLength="25"
             value={this.state.name}
             onInput={(event) => this.setState({ name: event.target.value })}></input>
            <label>Dates:</label>
            <input type="text" id="dates" name="dates" required minLength="8" maxLength="30"
            value={this.state.dates}
            onInput={(event) => this.setState({ dates: event.target.value })}></input>
            <label>Description:</label>
            <input type="text" id="descr" name="descr" required minLength="8" maxLength="25"
            value={this.state.description}
            onInput={(event) => this.setState({ description: event.target.value })}></input>
            <button type="button" onClick={this.submitActivity.bind(this)}>Add</button>
            </form>
            <br></br><br></br>

            <table>
                <caption>
                    <p><b>Activity Schedule</b></p>
                </caption>
                <thead>
                    <tr>
                        <th></th>
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

export default ManageActivities;
