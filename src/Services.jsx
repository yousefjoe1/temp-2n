import React from 'react';
import { BsFillDiagram3Fill } from "react-icons/bs";
import {BsCast} from 'react-icons/bs'
import {BsFillMegaphoneFill} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsEmojiSmile} from 'react-icons/bs'
import resp from './images/res.jpeg'
import {BsLaptop} from 'react-icons/bs'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {BsFillPhoneFill} from 'react-icons/bs'
import { FaReact } from "react-icons/fa";
 

const Serv = () => {
    return (
        <React.Fragment>
            <div id='serv' className="serv-container p-3">
                <h2 className='text-center fw-bold serv-h2'>Services</h2>
                <p className='text-center fs-1'><BsFillDiagram3Fill /></p>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit hic animi tempore ea molestias quaerat.</p>

                <div className="row ">
                    <div className="col-xl-6 text-center col-md-6 p-4 col-sm-4 col-xs-12 ">
                        <div className="col">
                        <BsCast className='fs-1 col-4' />
                            <h3>We make Very Good Work</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat, odit tempora quam eaque assumenda.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 text-center col-md-6 p-4  col-sm-4 col-xs-12">
                        <div className="col">
                        <BsFillMegaphoneFill className='fs-1 col-4' />
                            <h3>Every one Know about us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat, odit tempora quam eaque assumenda.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 text-center  col-md-6 p-4 col-sm-4 col-xs-12">
                        <div className="col">
                        <BsDiscord className='fs-1 col-4' />
                            <h3>We Support You</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat, odit tempora quam eaque assumenda.</p>
                        </div>
                    </div>
                    <div  className="col-xl-6  text-center col-md-6 p-4 col-sm-4 col-xs-12">
                        <div className="col">
                        <BsEmojiSmile className='fs-1 col-4' />
                            <h3>You will be happy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat, odit tempora quam eaque assumenda.</p>
                        </div>
                    </div>
                </div>

                <div height="240" className="res p-2 bg-primary">
                    <div className="row">
                        <div width="400" className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <img src={resp} className=' img-thumbnail rounded'  alt=""/>
                        </div>
                        <div className="col-xl-6 res-tex col-lg-6 col-md-12 col-sm-12">
                    <div className='text-light border border-warning border-3 rounded p-2'>
                        <h2>Our design is: </h2>
                        <h4><BsLaptop /> Resposive</h4>
                        <h4><BsFillGrid1X2Fill /> Modern And Clean Design</h4>
                        <h4><FaReact /> Clean Code</h4>
                        <h4><BsFillPhoneFill /> Browser Friendly</h4>
                    </div>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}
 
export default Serv;
