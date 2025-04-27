import { useDispatch } from 'react-redux'
import '../css/NavigationBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../features/authenticationSlice';
import isAuthenticated from "../hooks/isAuthenticated";


function NavigationBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login")
    }



    return (

        <nav className="navbar">
            <div className="navbar-logo">
                <h2>Notes App</h2>
            </div>
            <div className='nav-feature'>
                <ul className="navbar-links">
                    <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
                    <li><NavLink to="/notes" className="navbar-link">Notes</NavLink></li>
                    <li><NavLink to="/about-us" className="navbar-link">About Us</NavLink></li>
                    <li><NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
                </ul>
                {isAuthenticated() != null && <div className='logout-box'><button className="logout-btn" onClick={handleLogout}>log out</button></div>}
            </div>

        </nav>
    )
}

export default NavigationBar