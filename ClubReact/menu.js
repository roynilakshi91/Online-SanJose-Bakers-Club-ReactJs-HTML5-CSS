function Menu(props) {

            let liHome = <li className={props.show == "home" ? "active" : ""}><a onClick={props.showHome} >Homepage</a></li>;
            let liLogin = <li className={props.show == "login" ? "active" : ""}><a onClick={props.showLogin}>Login</a></li>;
            let liApply = <li className={props.show == "apply" ? "active" : ""}><a onClick={props.showApply}>Apply Now</a></li>;
            let liActivities = <li className={props.show == "activities" ? "active" : ""}><a onClick={props.showActivities}>Activities</a></li>;
            let liMActivities = <li className={props.show == "mActivities" ? "active" : ""}><a onClick={props.showMActivities}>Manage Activities</a></li>;
            let liLogout = <li className={props.show == "logout" ? "active" : ""}><a onClick={props.showLogout}>Logout</a></li>;

            if (props.role == "guest") {
                return <nav>
                  <h2>Navigation</h2>
                  <ul>
                    {liHome}
                    {liLogin}
                    {liApply}
                    {liActivities}
                  </ul>
                  </nav>;
            } else if (props.role == "user") {
                return <nav>
                  <h2>Navigation</h2>
                  <ul>
                    {liHome}
                    {liActivities}
                    {liMActivities}
                    {liLogout}
                  </ul>
                  </nav>;
            } else if (props.role == "admin") {
                return <nav>
                  <h2>Navigation</h2>
                  <ul>
                    {liHome}
                    {liApply}
                    {liActivities}
                    {liMActivities}
                    {liLogout}
                  </ul>
                  </nav>;
            }
}

export default Menu;
