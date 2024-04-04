import { ArrowBackIosOutlined, ArrowForwardIosOutlined, Directions } from "@material-ui/icons"
import "./list.scss"
import  ListItem  from "../listItems/ListItems";
import { useRef, useState } from "react";

export default function List() {
  const[isMoved,setIsMoved] = useState(false)
  const[slideNumber,setSlideNumber]=useState(0);
  //initially not clicked so false


  const listRef =useRef() 
  //The listRef variable will hold a   reference  to   a DOM element, typically used to access and manipulate the DOM element imperatively.

  const handleClick =(direction) =>{

    setIsMoved(true) // when clicked, it will become true 

    // function named **handleClick**, which takes a **direction** parameter. This function will be responsible for handling click events and changing the position of the referenced DOM element based on the specified direction.

    let distance =listRef.current.getBoundingClientRect().x-50  
    //calculates the distance of the referenced DOM element from the left edge of the viewport. 
     //It uses the getBoundingClientRect() method to obtain the position and size of the DOM element relative to the viewport,
    if (direction=== "left" && slideNumber>0){
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform =`translateX(${230 
      + distance}px)`

    }
    if (direction=== "right" && slideNumber<5){
      setSlideNumber(slideNumber+1);
      listRef.current.style.transform =`translateX(${-230 
      + distance}px)`

    }
    //transform CSS property is used to translate the element horizontally.

  }
  return (
    <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="SliderArrow left" onClick={()=>handleClick("left")}
            style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                
            </div>
            <ArrowForwardIosOutlined className="SliderArrow right"onClick={()=>handleClick("right")}/>
        </div>


    </div>
    
  )
}
