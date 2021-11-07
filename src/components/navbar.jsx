import React, { Component } from 'react';                   //imrc  //cc  //sfc

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-brand" style={{border:0, background:0}}>Navbar
                <span className="badge bg-secondary m-2 rounded-circle">{totalCounters}</span></button>
            </div>
        </nav>
    );
}

 
export default NavBar ;