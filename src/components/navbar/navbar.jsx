import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./Navbar.scss";

const navbar = () => {
  return (
    <div className="Navbar">
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
