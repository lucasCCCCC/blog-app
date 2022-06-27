import { Link } from "react-router-dom"
import "./signup.css"

export default function Signup() {
  return (
    <div className="signup">

        <span className="signupTitle">Register</span>

        <form className="signupForm">

            <label>Username</label>
            <input className="signupInput" type="email" placeholder="Create a username"></input>

            <label>Email</label>
            <input className="signupInput" type="email" placeholder="Your E-Mail Address"></input>

            <label>Password</label>
            <input className="signupInput" type="passsword" placeholder="Password"></input>

            <button className="signupButton">Register</button>
         
        </form>

        <button className="registerButton">
        <Link to="/login" className="link">Login</Link>
        </button>

    </div>
  )
}