import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../Context/Context";
import "./singlepost.css"

export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PUBLIC_FOLDER = "http://localhost:5000/imgs/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {

        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description)
        };

        getPost();

    },[path])

    const handleDelete = async () => {

        try{

            await axios.delete("/posts/"+path, {data:{usermame:user.username}});
            window.location.replace("/");

        } catch (err) {}
    }

    const handleUpdate  = async () => {
        try{

            await axios.put("/posts/"+path, {usermame:user.username, title, description});
            setUpdateMode(false);

        } catch (err) {}   
    }

  return (
 
    <div className="singlePost">
        <div className="singlePostWrapper">

            {post.photo && (
                <img src={PUBLIC_FOLDER + post.photo} alt=""
                    className="singlePostImage">
                </img>
            )}{
                updateMode ? <input type="text" value={title} className="singePostTitleInput" autoFocus
                                onChange={(e) => setTitle(e.target.value)}
                              /> 
                : (

                    <h1 className="singePostTitle">
                        
                        {title}

                        {post.usermame === user?.username && (

                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                            </div>

                        )}
                    </h1>
                )
            }
            

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:&nbsp;
                    <Link to={`/?user=${post.usermame}`} className="link">
                        <b>{post.usermame}</b>
                    </Link>
                </span>

                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

            </div>

            {updateMode ? 
                <textarea className="singlePostDescriptionInput" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                /> : 
                <p className="singlePostDescription">
                    {description}
                </p>
            }

            {updateMode && 
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            }


        </div>
    </div>
  )
}
