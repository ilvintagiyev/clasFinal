import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
        <header>
        <nav>
            <div className='Eartwell'>
                <h3>Eartwell</h3>
            </div>
            <ul className='general'>
                <li><Link className='link'  to={"/Home"}>Home</Link></li>
                <li><Link className='link' to={"/About"}>About</Link></li>
                <li><Link className='link' to={"/Offer"}>Offer</Link></li>
                <li><Link className='link' to={"/Menu"}>Menu</Link></li>
                <li><Link className='link' to={"/News"}>News</Link></li>
                <li><Link className='link' to={"/Gallery"}>Gallery</Link></li>
                <li><Link className='link' to={"/Contact"}>Contact</Link></li>
                <li><Link className='link' to={"/Add"}>Add</Link></li>
            </ul>
        </nav>
        </header>
        </>
    )
}

export default Navbar