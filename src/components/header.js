import React, { useState } from "react";
import { Link } from "gatsby";
import "./index.css"

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const clickDropdown = () => {
        setIsActive(!isActive);
    }

    return(
        <header classNameName="header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="container">
                <div className="flex-container">
                    <h1><a href="" className="logo has-text-danger">Artesanías y Accesorios Maya</a></h1>
                    
                    <div className={`dropdown is-right ${isActive ? 'is-active' : ''}`}>
                        <div className="dropdown-trigger">
                            <button className="button is-danger is-outlined" aria-haspopup="true" aria-controls="dropdown-menu" onClick={clickDropdown}>
                                <span>menu</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div className="dropdown-menu"  id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <Link to="/" className="dropdown-item"> Inicio </Link>
                                <Link to="/manillas" className="dropdown-item"> Manillas </Link>
                                <Link className="dropdown-item"> Mochilas </Link>
                                <Link to="" className="dropdown-item"> Pañoletas </Link>
                                <Link to="" className="dropdown-item"> Camandulas </Link>
                                <hr className="dropdown-divider" />
                                <Link to="" className="dropdown-item"> Contactanos </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="navbar-menu mt-4">
                    <div className="navbar-start">
                        <Link className="navbar-item has-text-danger" to="/">Inicio</Link>
                        <Link className="navbar-item has-text-danger" to="/manillas">Manillas</Link>
                        <Link className="navbar-item has-text-danger" to="">Mochilas</Link>
                        <Link className="navbar-item has-text-danger" to="">Pañoletas</Link>
                        <Link className="navbar-item has-text-danger" to="">Camandulas</Link>
                        
                    </div>
                </div>
            </div>
            <hr className="mx-5"></hr>
        </header>
    )
    
}

export default Header;