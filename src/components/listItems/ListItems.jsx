import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItems.scss"

export default function ListItems() {
  return (
    <div className="listItems">
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/p/q/x/medium-john-wick-movie-framed-poster-for-room-office-hollywood-original-imagn5h9czvhd8ca.jpeg?q=90&crop=false" alt="" />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
          </div>
          <div className="ItemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">16+</span>
            <span>1999</span>
          </div>
          <div className="desc">
          John Wick is a retired assassin who returns back to his old ways after a group of Russian gangsters steal his car and kill a puppy which was given to him by his late wife Helen.John Wick takes his fight against the High Table global as he seeks out more powerful players in the underworld from different countries.
          </div>
          <div className="genre">Action</div>
        </div>
    </div>
  )
}
