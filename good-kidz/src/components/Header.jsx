import React from 'react';
import { Link } from 'react-router-dom';
import { PaletteIcon } from '../pages/icons.jsx';
function Header() {
    return (
    <header className="px-4 lg:px-6 h-18 flex items-center">
                <Link to="/" className="flex items-center justify-center">
                    <PaletteIcon className="h-6 w-6" />
                    <span className="text-2xl font-bold">Good Kidz</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link to="/events" className="text-md font-medium hover:underline underline-offset-4">
                        Events
                    </Link>
                    <Link to="/about" className="text-md font-medium hover:underline underline-offset-4">
                        Gallery
                    </Link>
                    <Link to="/about" className="text-md font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link to="/create-event" className="text-md font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </header>
    );
}

export default Header;
