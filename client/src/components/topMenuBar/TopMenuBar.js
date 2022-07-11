import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./topmenubar.css"

export default function TopBar() {

  const {user, dispatch} = useContext(Context);
  const PUBLIC_FOLDER = "http://localhost:5000/imgs/";


  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }

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
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">

        {
          user ? (
            <Link to="/settings">
              <img className="topProfileImage" src={PUBLIC_FOLDER+user.profilePicture} alt=""/>
            </Link>

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