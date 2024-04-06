import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItems.scss"
import { useState } from "react"

export default function ListItems() {
  const [isHovered,SetIsHovered] = useState(false);
  const trailer = "https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4";
  
  
  
  return (
    <div className="listItems"
    onMouseEnter={()=> SetIsHovered(true)}
    onMouseLeave={()=> SetIsHovered(false)}
   >
        <img src="https://i.pinimg.com/736x/1e/c4/fa/1ec4fac248e6f8bd2cca6a7ac62b8ee0.jpg" alt="" />  
          {isHovered &&(
            <>

        <video src={trailer} autoPlay={true} muted={true} loop ={true}/>

        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon" />
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
          </div>
          <div className="ItemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
          John Wick is a retired assassin who returns back to his old ways after a group of Russian gangsters steal his car and kill a puppy which was given to him by his late wife Helen.
          </div>
          <div className="genre">Action</div>
        </div>
        </>
          )}
    </div>
  )
}
