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



    useEffect(() => {

        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        };

        getPost()

    },[path])

    const handleDelete = async () => {

        try{

            await axios.delete("/posts/"+path, {data:{usermame:user.username}});
            window.location.replace("/");

        } catch (err) {}
    }

  return (
 
    <div className="singlePost">
        <div className="singlePostWrapper">

            {post.photo && (
                <img src={PUBLIC_FOLDER + post.photo} alt=""
                    className="singlePostImage">
                </img>
            )}
            
            <h1 className="singePostTitle">
                
                {post.title}

                {post.usermame === user?.username && (

                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                    </div>

                )}
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:
                    <Link to={`/?user=${post.usermame}`} className="link">
                        <b>{post.usermame}</b>
                    </Link>
                </span>

                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

            </div>

            <p className="singlePostDescription">
                {post.description}
            </p>

        </div>
    </div>
  )
}
