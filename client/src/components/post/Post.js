import "./post.css"
import {Link} from "react-router-dom";

export default function Post({post}) {

  const PUBLIC_FOLDER = "http://localhost:5000/imgs/"

  return (
    <div className="post">

      {post.photo && (

        <img className="postImage"
          src={PUBLIC_FOLDER + post.photo} alt="" 
          width="500px">
         </img>
      )}

        <div className="postInfo">
            <div className="postCategories">
                {post.categories.map((c) => {
                  <span className = "postCategory">{c.name}</span>
                })}
            </div>

            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">
                  {post.title}
              </span>
            </Link>


            <hr/>

            <span className="postDate">
              {new Date(post.createdAt).toDateString()}
            </span>

        </div>

        <p className="postDescription">
          {post.description}
        </p>

    </div>
  )
}
