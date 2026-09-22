import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="appHeader">
            <NavLink className="appLogo" to="/">
                <span className="logoMark">S</span>
                <span>Travel & Tours</span>
            </NavLink>

            <button
                type="button"
                className="menuToggle"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/tours" onClick={() => setIsMenuOpen(false)}>Tours</NavLink>
                <NavLink to="/destinations" onClick={() => setIsMenuOpen(false)}>Destinations</NavLink>
                <NavLink to="/plan-your-tour" onClick={() => setIsMenuOpen(false)}>Plan Your Tour</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;
