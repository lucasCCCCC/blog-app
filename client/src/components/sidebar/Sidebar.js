import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {

    const [category, setCategories] = useState([]);

    useEffect(() => {
        const getCatg = async ()=> {
           const res = await axios.get("/categories")
           setCategories(res.data)
        }

        getCatg()
        
    },[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://www.treblezine.com/wp-content/uploads/2010/11/mbdtf.png" width="200px" alt=""/>
            <p>
                You might think you've peeped the scene
                You haven't, the real one's far too mean
                The watered down one, the one you know
                Was made up centuries ago
                They made it sound all wack and corny
                Yes, it's awful, blasted boring
                Twisted fictions, sick addiction
                Well, gather 'round, children, zip it, listen
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">TOPICS</span>
            <ul className="sidebarList">

                {category.map((c) => (
                    <Link to={`/?category=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}

            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sideBarTitle">CONTACT US</span>
            <div className="sidebarSocials">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
            </div>
        </div>

    </div>
  )
}
