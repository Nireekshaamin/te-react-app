import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/react.png';

//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm ">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{height:50,width:50,padding:10}}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">More</Link>
                </li>

            </ul>
        </nav>
    )
}