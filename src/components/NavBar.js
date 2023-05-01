import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return <nav className="nav">
        <Link to="/" className="library-app">Home</Link>
        <ul>
            <li>
                <Link to="/addBook">Add Book</Link>
            </li>
            <li>
                <Link to="/deleteBook">Delete Book</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </nav>
}

export default NavBar;
