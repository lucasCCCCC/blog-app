import "./post.css"

export default function Post() {
  return (
    <div className="post">

        <img className="postImage" src="https://db-service.toubiz.de/var/plain_site/storage/images/orte/zermatt/matterhorn/mueller-10-073/1370946-1-ger-DE/Mueller-10-073_front_large.jpg" alt="" width="500px"></img>
       
        <div className="postInfo">
            <div className="postCategories">
                <span className = "postCategory">Technology</span>
                <span className = "postCategory">Finance</span>
            </div>

            <span className="postTitle">
                Lorem ipsum dolor sit amet 
            </span>

            <hr/>

            <span className="postDate">3 hours ago</span>

        </div>

        <p className="postDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent vel tincidunt tortor. Vestibulum volutpat vulputate 
          est, sit amet feugiat urna ornare eu. Nullam ut lorem porttitor,
          condimentum dui eget lobortis

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent vel tincidunt tortor. Vestibulum volutpat vulputate 
          est, sit amet feugiat urna ornare eu. Nullam ut lorem porttitor,
          condimentum dui eget
        </p>

    </div>
  )
}
