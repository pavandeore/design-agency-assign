import React from 'react';
import logo from '../../assets/d-logo.jpg';
import './navbar.css';


function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light shadow-effect ">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <a className="navbar-brand ml-4" href="#">
                        <img alt="img" src={logo} width="40" height="40" alt="" />
                    </a>
                    <div className="mx-auto order-0">
                        <ul id="navbar" className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link mx-2 text-dark font-weight-bold" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-dark font-weight-bold" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-dark font-weight-bold" href="#">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-dark font-weight-bold" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-dark font-weight-bold" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 text-dark font-weight-bold" href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <a role="btn" className="btn circle-20 text-white px-4 mr-4 custom-blue-bg" href="#"> Contact Us </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar
