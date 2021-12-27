// import React from 'react'
import logo from './images/logo1.jpg'
// import { BsFillCaretDownFill } from "react-icons/bs";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import React, { useRef } from 'react';


const Nav = (props) => {

    const ulref = useRef(null);

    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > 20){
            // console.log(ulref.current.classList);
            ulref.current.classList.add('fixed-nav-ul')
        }else {
            ulref.current.classList.remove('fixed-nav-ul')
        }

    })

    return (
        <React.Fragment>
            <div className="container  ">
                <nav className="navbar border-primary border-bottom-4 border-bottom navbar-light d-flex justify-content-between">

                    <div className="container-fluid">
                        <a className="navbar-brand d-flex justify-content-start align-items-center" href="#">
                        <img src={logo} alt="" width="100" height="84" className="d-inline-block align-text-top"/>
                        <span className='fw-bold fs-3 text-white'>GO</span>
                        </a>
                        <ul ref={ulref} className='d-flex ul-nav flex-wrap justify-content-between'>
                            <li><AnchorLink className='active' href="#">Home</AnchorLink></li>
                            <li><AnchorLink href="#serv">Sevices</AnchorLink></li>
                            <li><AnchorLink href="#port">Portfolio</AnchorLink></li>
                            <li><AnchorLink href="#about">About</AnchorLink></li>
                            <li><AnchorLink href="#price">Pricing</AnchorLink></li>
                            <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                        </ul>
                        </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Nav; 