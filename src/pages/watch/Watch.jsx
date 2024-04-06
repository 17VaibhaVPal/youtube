import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            home
        </div>
        <video 
        //HTML element used to embed video content into a web page.
    class="video"
    autoplay //This attribute specifies that the video should start playing as soon as it is loaded.
    controls//This attribute adds video controls (play, pause, volume, etc.) to the <video> element, allowing users to interact with the video playback.
    src="https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4"/>

    </div>
  )
}
