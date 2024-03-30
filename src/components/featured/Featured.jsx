import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
  return (
    //The {type} inside the brackets is using object destructuring syntax to extract a prop called type from the props object passed to the Featured component.
//Here's what happens:

// When you use the Featured component, you might pass props to it like this: <Featured type="Movies" />.
// The type prop is then accessible inside the Featured component as a parameter.
    <div className="featured">
        {type && (
            <div className="category">
            <span>{type==="Movies" ? "Movies" : "Series"}</span>
            
            <select name="Genre" id="genre">
                <option>Genre</option>
                <option value="Adventrue">Adventrue</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
                <option value="Drama">Drama</option>
                <option value="Documentary">Documentary</option>
            </select>
            </div>
        )
        }
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
