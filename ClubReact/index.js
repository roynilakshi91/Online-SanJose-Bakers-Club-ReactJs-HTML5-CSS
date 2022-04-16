import events from "./eventData.json"
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu"; // my new menu component in menu.js
import Home from "./home";
import Login from "./login";
import Activities from "./activities";
import ManageActivities from "./AdminActivity";
import Apply from "./apply";

class App extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { role: "admin", show: "home" }; 
    }

    showElement = ["home", "login", "apply", "activities", "mActivities", "logout"];

    handler(name) {
        console.log("Inside handler" + name);
        this.setState({show: `${name}`});
    }

    render() {
        let content = <Home />;
        if (this.state.show == "home") {
            content = <Home />;
        } else if (this.state.show == "login") {
            content = <Login />;
        } else if (this.state.show == "apply") {
            content = <Apply />;
        } else if (this.state.show == "activities") {
            content = <Activities events={events} />;
        } else if (this.state.show == "mActivities") {
            content = <ManageActivities events={events} />;
        }

        let homeHandler;
        let loginHandler;
        let applyHandler;
        let activitiesHandler;
        let mActivitiesHandler;
        let logoutHandler; 

        [homeHandler, loginHandler, applyHandler, activitiesHandler, mActivitiesHandler, logoutHandler] = this.showElement.map(x => this.handler.bind(this, x));

        // statements/logic to set the content variable based on state
        return (
            <>
                <Menu role={this.state.role} show={this.state.show} showHome={homeHandler} showLogin={loginHandler} showApply={applyHandler} showActivities={activitiesHandler} showMActivities={mActivitiesHandler} showLogout={logoutHandler}/>
                {content}
            </>
        );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));
