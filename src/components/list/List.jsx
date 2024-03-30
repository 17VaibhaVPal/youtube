import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import  ListItem  from "../listItems/ListItems";

export default function List() {
  return (
    <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="SliderArrow left"/>
            <div className="container">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <ArrowForwardIosOutlined className="SliderArrow right"/>
        </div>


    </div>
    
  )
}
