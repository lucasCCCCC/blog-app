import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">

        <span className="loginTitle">Login</span>

        <form className="loginForm">

            <label>Email</label>
            <input className="loginInput" type="email" placeholder="Your E-Mail Address"></input>

            <label>Password</label>
            <input className="loginInput" type="passsword" placeholder="Password"></input>

            <button className="loginButton">Login</button>
         
        </form>

        <button className="loginregisterButton">
          <Link to="/signup" className="link">Register</Link>
        </button>

    </div>
  )
}
