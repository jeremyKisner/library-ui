import React from 'react';
import { Link } from "react-router-dom";
import CartIcon from "../images/cart.svg"

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="library-app">Home</Link>
                <ul>
                    <li>
                        <Link to="/addBook">Add Book</Link>
                    </li>
                    <li>
                        <Link to="/deleteBook">Delete Book</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <img src={CartIcon} width="25" height="25"></img>
                            <div className="badge" >0</div>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
