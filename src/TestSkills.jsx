import React from 'react'
import joe from './images/joe-avatar.png'
import other from './images/devav.jpg'
const TestSkills = () => {
    return (
        <React.Fragment>
            <div className="test-skill-cont container-fluid mt-3 p-3">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12 test-skill-col">
                        <h2 className='text-center fw-bold mt-4'>TESTIMONIALS</h2>
                        <p className='text-center fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate officiis cum natus consequuntur qui ratione.</p>

                        <div className="test-1 flex-wrap text-center m-3 border-bottom col-12 d-flex align-items-center">
                            <img src={joe} className='img-thumbnail m-2' alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <h5 className='align-self-end fs-4' >Youssef Mahmoud</h5>
                        </div>

                        <div className="test-1 d-flex flex-wrap  text-center m-3 border-bottom col-12 d-flex align-items-center">
                            <img src={other} className='img-thumbnail m-2' alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <h5 className='align-self-end fs-4' >Jacky Chan</h5>
                        </div> 

                        <div className="round-test">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className='text-center  fw-bold mt-4'>Skills</h2>
                        <p className='text-center fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate officiis cum natus consequuntur qui ratione.</p>

                        <div className="proge ">
                            <h3 className='text-danger' >HTML</h3>
                            <div className="progress m-2">
                                <div className="progress-bar fw-bold text-dark bg-danger fs-3" 
                                    role="progressbar" 
                                    style={{width: '85%'}}
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">85%
                                </div>
                            </div>
                            <h3 className='text-primary' >Css</h3>
                            <div className="progress m-2">
                                <div className="progress-bar fw-bold  text-dark  fs-3" 
                                    role="progressbar" 
                                    style={{width: '65%'}}
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">65%
                                </div>
                            </div>
                            <h3 className='text-warning' >Javascript</h3>
                            <div className="progress m-2">
                                <div className="progress-bar fw-bold  text-dark  bg-warning fs-3" 
                                    role="progressbar" 
                                    style={{width: '45%'}}
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">45%
                                </div>
                            </div>
                            <h3 className='text-info' >React</h3>
                            <div className="progress m-2">
                                <div className="progress-bar fw-bold  text-dark  bg-info fs-3" 
                                    role="progressbar" 
                                    style={{width: '25%'}}
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">25%
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}
 
export default TestSkills;