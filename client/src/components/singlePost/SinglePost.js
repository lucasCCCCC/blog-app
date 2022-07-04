import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import "./singlepost.css"

export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {

        const getPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        };

        getPost()

    },[path])

  return (
 
    <div className="singlePost">
        <div className="singlePostWrapper">

            {post.photo && (
                <img src={post.photo} alt=""
                    className="singlePostImage">
                </img>
            )}
            
            <h1 className="singePostTitle">
                
                {post.title}

                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>

            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>{post.usermame}</b></span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>

            </div>

            <p className="singlePostDescription">
                {post.description}
            </p>

        </div>
    </div>
  )
}
