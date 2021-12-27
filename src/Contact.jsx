import React from 'react'
import { FcAssistant } from "react-icons/fc";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
    return (
        <React.Fragment>
            <div id='contact' className="contact-cont container-fluid">
                <h2 className='text-center text-danger fs-1 fw-bold' >Contact Us</h2>
                <h3 className='text-center fs-1' ><FcAssistant /></h3>

                <div className="row p-2 mt-4 text-center">
                    <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12">

                        <div className="form border p-1 rounded border-3 border-light">
                            <label className='fs-4 fw-bold' htmlFor="email">Email</label><br/>
                            <input id='email' type="email"/><br/>
                            <label className='fs-4 fw-bold' htmlFor="password">password</label><br/>
                            <input id='password' type="password" name="" id=""/><br/>
                            <textarea placeholder='Your message' name="" id="" cols="30" rows="20"></textarea><br/>
                            <button className='btn btn-success fs-3' >Send</button>
                        </div>

                    </div>

                    <div className="col-lg-4 mt-5 col-xl-4 col-md-4 col-sm-12">
                            <p className='fs-3 text-light fw-bold' ><BsTelephoneForwardFill /> Phone1: 0000000000</p>
                            <p className='fs-3 text-light fw-bold'><BsTelephoneForwardFill /> Phone2: 0000000000</p>
                            <p className='fs-3 text-light fw-bold'><BsWhatsapp/> WhatsApp 000000000000 </p>
                        </div>
                </div>

            </div>
        </React.Fragment>
    );
}
 
export default Contact;