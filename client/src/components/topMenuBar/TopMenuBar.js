import { Link } from "react-router-dom";
import "./topmenubar.css"

export default function TopBar() {

  const user = false;

  return (

    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
      </div>

      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">BLOG</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {
          user ? (
            <img className="topProfileImage" src="https://i.imgflip.com/41j06n.png" alt=""/>

          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/signup">REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="topIconSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}