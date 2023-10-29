import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning text-dark">
            <Link to="/" className='navbar-brand mx-3'>Recipe Book</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/upload-recipe" className='nav-link'>Upload Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipe-list" className='nav-link'>Recipe List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
