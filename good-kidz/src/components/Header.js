
import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <nav>
            <div className="logo">
                <img src={props.logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/create-event">Create Event</Link></li>
                </ul>
            </div>
            {/* <div className="login">
                <button>Login</button>
                <button>Sign Up</button>
            </div> */}

        </nav>

    )
}
export default Header;