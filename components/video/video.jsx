import ReactPlayer from "react-player";
import "./index.css";

function Video() {
    return (
        <div className="video-container">
            {/* <article className="video"> */}

         <ReactPlayer  style={{borderRadius: "20px"}} className="react-video-player" width="100%" height="100%" url='https://www.youtube.com/watch?v=-y_KrosGWaU&t=126s' />

            {/* </article>0 */}
        </div>
    )
}

export default Video;