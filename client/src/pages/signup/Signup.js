import { useState } from "react"
import { Link } from "react-router-dom"
import "./signup.css"
import axios from "axios";


export default function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try{

      const res = await axios.post('/authentication/register', {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login")

    } catch(err){
      setError(true)
    }
  };

  return (
    <div className="signup">

        <span className="signupTitle">Register</span>

        <form className="signupForm" onSubmit={handleSubmit}>

            <label>Username</label>
            <input className="signupInput"
              type="text" 
              placeholder="Create a username"
              onChange={e => setUsername(e.target.value)}
             />

            <label>Email</label>
            <input className="signupInput"
              type="email"
              placeholder="Your E-Mail Address"
              onChange={e => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input className="signupInput" 
              type="password" 
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />


            <button className="signupButton" type="submit">Register</button>
         
        </form>

        <button className="registerButton">
        <Link to="/login" className="link">Login</Link>
        </button>

        {error && <span style={{color:"red", marginTop:"10px"}}>An error has occured!</span>}

    </div>
  )
}