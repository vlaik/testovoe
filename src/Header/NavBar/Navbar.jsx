import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'



function NavBar(){
    return(
        <div>
            <Link className='links' to='/'>Forecasts</Link>
            <Link className='links' to='/popularcities'>Popular cities</Link>
            <Link className='links' to='/photo'>Photos</Link>
        </div>
    )
}

export default NavBar;