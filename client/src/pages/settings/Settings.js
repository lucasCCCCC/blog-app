import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">

          <label>Profile Picture</label>

          <div className="settingsProfilePicture">
            <img src="https://i.imgflip.com/41j06n.png" alt=""></img>
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>

          <label>Username</label>
          <input type="text" placeholder="Lucas"></input>

          <label>Email</label>
          <input type="email" placeholder="lucas@gmail.com"></input>

          <label>Password</label>
          <input type="password"></input>

          <button className="settingsSubmit">Update Profile</button>
          
        </form>
    
      </div>

      <Sidebar/>

    </div>
  )
}
