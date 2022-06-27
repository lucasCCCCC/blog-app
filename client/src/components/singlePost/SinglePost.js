import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://db-service.toubiz.de/var/plain_site/storage/images/orte/zermatt/matterhorn/mueller-10-073/1370946-1-ger-DE/Mueller-10-073_front_large.jpg" alt="" className="singlePostImage"></img>
            <h1 className="singePostTitle">
                Lorem ipsum dolor sit amet consectetur adipiscing elit

                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>

            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Lucas</b></span>
                <span className="singlePostDate">15 minutes ago</span>

            </div>

            <p className="singlePostDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent vel tincidunt tortor. Vestibulum volutpat vulputate
                est, sit amet feugiat urna ornare eu. Nullam ut lorem porttitor,
                condimentum dui eget, lobortis felis. Vivamus dignissim mi eu 
                venenatis sodales. Mauris pellentesque justo id tincidunt commodo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                vel tincidunt tortor. Vestibulum volutpat vulputate est, sit amet 
                feugiat urna ornare eu. Nullam ut lorem porttitor, condimentum dui eget, 
                lobortis felis. Vivamus dignissim mi eu venenatis sodales. Mauris 
                pellentesque justo id tincidunt commodo.
            </p>


        </div>
    </div>
  )
}
