import { NavLink } from "react-router-dom";
import algoflow from '../assets/algoflow_icon.png'
import "./all_css_codes/Navbar.css"

export default function Navbar() {
    const data = JSON.parse(localStorage.getItem('user_info'));
    const login = data ? data.isAuthenticated : false;
    return (
        <div className="navbar">
            <div className="logo">
                <img src={algoflow} alt="ALGO FLOW" />
                <h1>ALGO FLOW</h1>
            </div>
            <div className="nav-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/problems'>Problems</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className="auth-links">
                {!login ? (
                    <NavLink to='/login'>Login</NavLink>
                ) : (

                    <NavLink to='/profile' >
                        <i className="fas fa-user"></i>
                    </NavLink>
                )}
            </div>
        </div>
    )
} 