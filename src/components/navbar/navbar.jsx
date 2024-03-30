import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
import { useState } from "react";

const navbar = () => {
  const [isScrolled,setisScrolled] = useState(false);
  window.onscroll= () =>{ 
    //This attaches an event listener to the onscroll event of the window. When the user  scrolls the window, the arrow function is invoked.
    
    setisScrolled(window.scrollY === 0 ? false : true );
     //vertical scroll position of the window (window.scrollY). If the scroll position is 0, indicating that the top of the page is visible, isScrolled is set to false. Otherwise, it's set to true.

    return () => (window.onscroll= null);
    //This line returns a cleanup function that removes the event listener for the onscroll event when the component is unmounted. It ensures that there are no memory leaks or unnecessary event listeners after the component is removed from the DOM.
  };


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
          <span>Home page </span>
          <span>Series </span>
          <span>Movies </span>
          <span> New and Popular </span>
          <span> My list </span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://storage.googleapis.com/pai-images/3a99f38efd784ea596e6f5018a9a1568.jpeg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting </span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
