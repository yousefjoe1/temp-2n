import React from 'react';
import { FaProductHunt } from "react-icons/fa";
import print1 from './images/print.jpg'
import print2 from './images/print2.jpg'
import app1 from './images/app1.jpg'
import app2 from './images/app2.jpg'
import web1 from './images/web1.png'
import web2 from './images/web2.jpg'
import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'


const Portfolio = () => {
    return (
        <React.Fragment>
            <div id='port' className="port-container">
                <div className="text-div text-center p-3 m-2">
                    <h2 className='text-center fw-bold fs-1'>Portfolio</h2>
                    <FaProductHunt className='fs-2'/>
                    <p style={{maxWidth: 300,margin: '0 auto'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure totam exercitationem blanditiis cupiditate dicta, labore harum corporis dolores.</p>
                </div>

                <div className="cat text-center">
                    <span>All</span>
                    <span>App</span>
                    <span>Photo</span>
                    <span>Web</span>
                    <span>Print</span>
                </div>

                <div className="imgs container text-center">
                    <div className="row img-cont text-center ">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}} 
                                className='img-thumbnail card-img-top' src={web2} alt=""/>
                                <h4 className='bg-primary anim-h4 '>Nice Image</h4>
                            </span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}}  
                                className='img-thumbnail card-img-top' src={app1} alt=""/>
                            <h4 className='bg-primary anim-h4 '>Nice Image</h4>
                            </span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}}  
                                className='img-thumbnail card-img-top' src={app2} alt=""/>
                            <h4 className='bg-primary anim-h4 '>Nice Image</h4>
                            </span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}}  
                                className='img-thumbnail card-img-top' src={photo2} alt=""/>
                            <h4 className='bg-primary anim-h4 '>Nice Image</h4>
                            </span>
                        </div>
                    </div>

                    <div className="row img-cont ">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}}
                                className='img-thumbnail card-img-top' src={print1} alt=""/>
                            <h4 className='bg-primary anim-h4'>Nice Image</h4>
                            </span>
                        </div>
                            
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}} 
                                className='img-thumbnail card-img-top' src={print2} alt=""/>
                            <h4 className='bg-primary anim-h4'>Nice Image</h4>
                            </span>
                        </div>
                            

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <span className=''>
                                <img style={{width: 300,height: 300}}  
                                className='img-thumbnail card-img-top' src={web1} alt=""/>
                            <h4 className='bg-primary anim-h4'>Nice Image</h4>
                            </span>
                        </div>
                            

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <span className=''>
                                <img style={{width: 300,height: 300}}  
                                className='img-thumbnail card-img-top' src={photo1} alt=""/>
                            <h4 className='bg-primary anim-h4 '>Nice Image</h4>
                            </span>
                        </div>
                    </div>

                    <button className="bg-primary fs-3 text-light  mt-4 border-0 p-3">More</button>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Portfolio;