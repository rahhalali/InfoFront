import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            {/* navbar */}
            <div className="nav-header">
                <nav className="navbar">
                    <div className="navbar-links">
                        <ul>
                            <li>
                                <Link to="/add-employee" className="home">
                                    Add Employee
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-department" className="home">
                                    Add Department
                                </Link>
                            </li>
                            <li>
                                <Link to="/delete-employee" className="home">
                                    Delete Employee
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}