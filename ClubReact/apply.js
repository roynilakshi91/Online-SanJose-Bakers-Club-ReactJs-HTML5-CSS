import React from "react";
import ReactDOM from "react-dom";

class Apply extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { name: "" , email: "", password: "",confPassword: "",level: "Beginner", comments: "", dialogClass: "dialog" }; 
    }

    submitApplication() {
        // In a real application we'd actually send data to a server here
        // But all we'll do here is show the welcome/thanks dialog
        this.setState({ dialogClass: "show" })
    }




    render() {
        let message = null;
    if (this.state.password.length < 8 || this.state.password !== this.state.confPassword) {
        message = <p>Password too short or not confirmed.</p>
    } else { // Everything is good create a welcome message
        message = <p>Welcome <em>{this.state.name}</em>,{" "}
        your email is <em>{this.state.email}</em>,{" "}
        your level is <em>{this.state.level}</em>{" "}
        and you had the following comments: <em>{this.state.comments}</em></p>
    }
        return <main>
        <form id="form" className="wrapper">
            <label>Name:</label>
            <input type="text" id="name" name="name" 
             required minLength="6" maxLength="25"
             value={this.state.name} 
             onInput={(event) => this.setState({ name: event.target.value })}></input>
            <label>Email:</label>
            <input type="email" id="email" name="email" required minLength="10" maxLength="30"
            value={this.state.email}
            onInput={(event) => this.setState({ email: event.target.value })}></input>
            <label>Password:</label>
            <input type="password" id="pw1" name="pw" required minLength="8" maxLength="25"
            value={this.state.password}
            onInput={(event) => this.setState({ password: event.target.value })}></input>
            <label>Confirm Password:</label>
            <input type="password" id="pw2" name="pw" required minLength="8" maxLength="25"
            value={this.state.confPassword}
            onInput={(event) => this.setState({ confPassword: event.target.value })}></input>

            <label> Level </label>
            <select name="level" id="level" value={this.state.level}
            onInput={(event) => this.setState({ level: event.target.value })}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Proficient">Proficient</option>
            </select>
            <label>Comments:</label>
            <textarea id="comment" name="comment" value={this.state.comments}
            onInput={(event) => this.setState({ comments: event.target.value })}></textarea>
            <button type="button" onClick={this.submitApplication.bind(this)}>Apply</button>
        </form>
        <br></br>
        <section id="ThanksDialog" className={this.state.dialogClass}>
        <div className="innerText">
            <h1>Thanks for Signing Up</h1>
            {message}
            <button onClick={(event) => this.setState({ dialogClass: "dialog" })}>
              Close
            </button>
          </div>
        </section>
        </main>;
    }
}
export default Apply;
