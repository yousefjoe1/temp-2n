import React from 'react'
import { FcCurrencyExchange } from "react-icons/fc";


const Pricing = () => {
    return (
        <React.Fragment>
            <div id='price' className="price-cont text-light p-2 mt-4 container-fluid">
                <h2 className='text-center fw-bold fs-1'>Pricing</h2>
                <h3  className='text-center fs-1' ><FcCurrencyExchange/></h3>
                <p className='text-center fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure possimus a ipsa blanditiis.</p>

                <div className="price-div mt-3">

                    <div className="row p-4">

                        <div className="col-lg-3 price-col mt-3  p-2 text-center border-dark col-md-6 col-sm-12">
                            <p className='fs-3 fw-bold ' >Start</p>
                            {/* <hr/> */}
                            <div className="span-cont p-2">
                                <span><sup className='fs-5' >$</sup></span>
                                <span className='fw-bold fs-1' >16</span>
                                <span>/Mo</span>
                            </div>
                            <hr/>
                            <h3>Future 1</h3>
                            <h3>Extra Future</h3>
                            <h3>Extra Future 2</h3>
                            <h3>Extra Future 3</h3>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>

                        <div className="col-lg-3 price-col mt-3 p-2 text-center border-dark col-md-6 col-sm-12">
                            <p className='fs-3 fw-bold' >Premium</p>
                            {/* <hr/> */}
                            <div className="span-cont p-2">
                                <span><sup className='fs-5' >$</sup></span>
                                <span className='fw-bold fs-1' >22</span>
                                <span>/Mo</span>
                            </div>
                            <hr/>
                            <h3>Future 1</h3>
                            <h3>Extra Future</h3>
                            <h3>Extra Future 2</h3>
                            <h3>Extra Future 3</h3>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>

                        <div className="col-lg-3 price-col p-2 mt-3  text-center border-dark  col-md-6 col-sm-12">
                            <p className='fs-3 fw-bold' >Pro</p>
                            {/* <hr /> */}
                            <div className="span-cont p-2">
                                <span><sup className='fs-5' >$</sup></span>
                                <span className='fw-bold fs-1' >35</span>
                                <span>/Mo</span>
                            </div>
                            <hr/>
                            <h3>Future 1</h3>
                            <h3>Extra Future</h3>
                            <h3>Extra Future 2</h3>
                            <h3>Extra Future 3</h3>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>

                        <div className="col-lg-3 price-col p-2 mt-3  text-center border-dark col-md-6 col-sm-12">
                            <p className='fs-3 fw-bold' >Platinum</p>
                            {/* <hr/> */}
                            <div className="span-cont p-2">
                                <span><sup className='fs-5' >$</sup></span>
                                <span className='fw-bold fs-1' >41</span>
                                <span>/Mo</span>
                            </div>
                            <hr/>
                            <h3>Future 1</h3>
                            <h3>Extra Future</h3>
                            <h3>Extra Future 2</h3>
                            <h3>Extra Future 3</h3>
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Pricing;