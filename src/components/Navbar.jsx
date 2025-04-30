import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <h1>Country Explorer</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;