import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import "./home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
     
      <Featured type="Movies"/>

    </div>
  );
};

export default Home;
