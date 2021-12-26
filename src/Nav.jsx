import React from 'react'
import logo from './images/logo1.jpg'
import { BsFillCaretDownFill } from "react-icons/bs";

const Nav = (props) => {
    return (
        <React.Fragment>
            <div className="container  ">
                <nav className="navbar border-primary border-bottom-4 border-bottom navbar-light d-flex justify-content-between">

                    <div className="container-fluid">
                        <a className="navbar-brand d-flex justify-content-start align-items-center" href="#">
                        <img src={logo} alt="" width="100" height="84" className="d-inline-block align-text-top"/>
                        <span className='fw-bold fs-3 text-white'>GO</span>
                        </a>
                        <ul className='d-flex ul-nav flex-wrap justify-content-between'>
                            <li><a className='active' href="#">Home</a></li>
                            <li><a href="#serv">Sevices</a></li>
                            <li><a href="#port">Portfolio</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#price">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Nav; 