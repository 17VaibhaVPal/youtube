import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItems.scss"
import { useState } from "react"

export default function ListItems() {
  const [isHovered,SetIsHovered] = useState(false);
  const trailer = "https://download-video.akamaized.net/v3-1/download/b83f061f-0844-4c6f-9f82-28f01fed220a/48d69ced-266fdd5d/bmV3X3JlY29yZGluZ18tXzRfNF8yMDI0LF8xMDozMDozNl9hbSAoMzYwcCkubXA0?__token__=st=1712207779~exp=1712222179~acl=%2Fv3-1%2Fdownload%2Fb83f061f-0844-4c6f-9f82-28f01fed220a%2F48d69ced-266fdd5d%2FbmV3X3JlY29yZGluZ18tXzRfNF8yMDI0LF8xMDozMDozNl9hbSAoMzYwcCkubXA0%2A~hmac=a7e7e259c92ec3fec3dc18ceae435a79e33d2687bd156301ed6b2d29e057b262&r=dXMtZWFzdDE%3D";
  
  
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
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
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
