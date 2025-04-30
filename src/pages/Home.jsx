import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
  return (
    <div className="container">
      <h1>Learn More About Any Country</h1>
      <div className="btn-container">
        <Link to="/continent">
            <button className="btn">Select By Map</button>
        </Link>

        <Link to="/country">
            <button className="btn">Select By Name</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
