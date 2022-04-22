// import React, { Component } from 'react'


const Navbar = (props) => {
    console.log('Navbar-Renderd');
    return (  
        <nav className="navbar navbar-light bg-light">
             <a 
                className="navbar-brand" href="#">
                Navbar <span className="badge bg-warning badge-primary">{props.totalcounters}</span>
             </a>
        </nav> )
        ;
}
 
export default Navbar;