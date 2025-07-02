import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <li> <NavLink to="/homepage" className="nav-link" >Home Page</NavLink> </li>
            <li> <NavLink to="/about" className="nav-link">Chi Siamo</NavLink> </li>
            <li> <NavLink to="/movie-list" className="nav-link">lista movies</NavLink> </li>

        </nav>

    )
}

export default Navbar
