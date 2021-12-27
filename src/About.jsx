import React from 'react'
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { BsCupStraw } from "react-icons/bs";
import { FcKindle } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import TestSkills from './TestSkills'

const About = () => {
    return (
        <React.Fragment>
            <div id='about' className="about-cont bg-secondary p-2 container-fluid">
                <h2 className='text-center text-white'>About</h2>
                <p className='text-center fs-2 text-info'><BsFillQuestionOctagonFill /></p>
                <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus fugiat aperiam eaque cupiditate libero. Ullam, cum mollitia?</p>
                <div className="div1-about">
                    <div className="div2-about rounded text-white">
                        <div className="row text-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <p className='fs-1'><BsCupStraw /></p>
                                <h2>1.422</h2>
                                <h5>Juice drinks</h5>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
                                <p className='fs-1'><FcKindle /></p>
                                <h2>1.123</h2>
                                <h5>Completed Projects</h5>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
                                <p className='fs-1'><FcFeedback /></p>
                                <h2>2.752</h2>
                                <h5>Mail Sent</h5>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <p className='fs-1'><FcGraduationCap /></p>
                                <h2>12</h2>
                                <h5>Awards</h5>
                            </div>

                        </div>
                    </div>
                </div>
            <TestSkills />
            </div>
        </React.Fragment>
    );
}

export default About;