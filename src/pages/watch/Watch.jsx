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
    src="https://player.vimeo.com/progressive_redirect/download/930519215/container/b83f061f-0844-4c6f-9f82-28f01fed220a/1e167f4e-266fdd5d/new_recording_-_4_4_2024,_10:30:36_am%20%28540p%29.mp4?expires=1712256045&loc=external&signature=d53b5eda92d0b601fe7287e2325bcc1f4702f8f26124cdfb2a584ab6852df393"/>




      
    </div>
  )
}
