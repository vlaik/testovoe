import React from 'react'
import './header.scss'
import NavBar from './NavBar/Navbar'

function Header(){
    return(
        <div className='header-container'>
            <h1>Weather<span>Info</span></h1>
            <NavBar/>
        </div>
    )
};


export default Header;