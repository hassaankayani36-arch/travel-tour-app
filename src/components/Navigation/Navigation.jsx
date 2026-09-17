import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="appHeader">
            <NavLink className="appLogo" to="/">
                <span className="logoMark">S</span>
                <span>Travel & Tours</span>
            </NavLink>
            <div className="navLinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tours">Tours</NavLink>
                <NavLink to="/destinations">Destinations</NavLink>
                <NavLink to="/plan-your-tour">Plan Your Tour</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;
