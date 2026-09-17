import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink className="navigation__brand" to="/">
                <span className="navigation__mark">S</span>
                <span>Travel & Tours</span>
            </NavLink>
            <div className="navigation__links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tours">Tours</NavLink>
                <NavLink to="/destinations">Destinations</NavLink>
                <NavLink to="/plan-your-tour">Plan Your Tour</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;
