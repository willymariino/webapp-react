import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <li> <NavLink to="/homepage" className="nav-link" >Home Page</NavLink> </li>
            <li> <NavLink to="/about" className="nav-link">About Us</NavLink> </li>
            <li> <NavLink to="/movie-list" className="nav-link">Movies List</NavLink> </li>

        </nav>

    )
}

export default Navbar
