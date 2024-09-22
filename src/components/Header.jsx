import React from 'react'
import { Link } from "react-router-dom";
import toolsLogo from '../assets/toolslogo.png'

const Header = () => {
  return (
    <header className="jumbotron jumbotron-fluid bg-info text-white" style={{paddingTop:"2px !important", paddingBottom:"2px !important"}}>
    
        <nav className="d-flex justify-content-between container">
            <div>
                <span className="d-flex">
                    <Link to='' className="navbar-brand text-dark font-weight-bold text-uppercase me-2">
                        <img src={toolsLogo} alt="logo" width="80px"/>
                    </Link>
                    <span className="pt-3">
                            <h4 className="mb-0 mt-2">Jo's Tools Box</h4>      
                            <p>All the Tools you need in one place</p>
                    </span>
                </span>
            </div>
            
            <div className="pt-3">
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        Home
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to='/' className="dropdown-item">Home</Link></li>
                        <li><Link to='/shortener' className="dropdown-item">Shorteners</Link></li>
                        <li><Link to='/converter' className="dropdown-item">Converters</Link></li>
                        <li><Link to='/about' className="dropdown-item">About</Link></li>
                        <li><Link to='/contact' className="dropdown-item">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header