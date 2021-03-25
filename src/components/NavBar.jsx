import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import './NavBar.css'

const Navbar = () =>{

    return(
        <nav className="navbar navbar-expand-lg bg-dark py-3">
           <div className="container">
                <a className="navbar-brand" href="/">Image-List</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/*When using anchor tags directly in react to navigate it would try and get the page each time from the server, so loading index.html each time a link is clicked, to avoid this use a Link  */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2"><Link target="_blank" className="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item mx-2"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item mx-2"><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item mx-2"><Link className="nav-link" to="/image-search">Image Search</Link></li>  
                        {/* <li className="nav-item mx-2"><a className="nav-link" href="/image-search">Image Search</a></li>      */}

                    </ul>
                </div>

             </div>   
        </nav>
    )
} 

export default Navbar