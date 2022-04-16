function Login(props) {
        return <main>
            <h1> Login Form </h1>
            <form>  
                <label>Username : </label> 
                <input type="text" name="username" required minLength="6" maxLength="25" ></input> 
                <label>Password : </label>   
                <input type="password" name="password" required minLength="12" maxLength="25"></input>  
                <button type="submit">Login</button>   
            </form>
        </main>;
}

export default Login;
