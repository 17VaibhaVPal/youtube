import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
        <img src="https://storage.googleapis.com/pai-images/3a99f38efd784ea596e6f5018a9a1568.jpeg" alt="" />
        <div className="info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId_xmdmFuOXLJI4Avx9hI0ZNcx6mp3idrKtLLg8Dkew&s" 
            alt="" />
            <div className="description">
            Matrix Theory is based on the idea that the world is like a computer program, with a set of rules and algorithms that determine how things work. According to as per research, understanding these rules and algorithms is the key to success in life, and anyone can learn to "HACK" the matrix by mastering them.
            
            </div>
            <div className="buttons">
                <buttons className="Play">
                    <PlayArrow/>
                    <span>Play</span>
                </buttons>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
      
    </div>
  )
}
