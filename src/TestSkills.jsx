import React from 'react'
import joe from './images/joe-avatar.png'
const TestSkills = () => {
    return (
        <React.Fragment>
            <div className="test-skill-cont container-fluid mt-3 p-3">
                        <h2 className='text-center mt-4'>TESTIMONIALS</h2>
                        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate officiis cum natus consequuntur qui ratione, iusto suscipit asperiores.</p>
                <div className="row">
                    <div className="col">
                        <div className="test-1">
                            <img src={joe} className='img-thumbnail' alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto blanditiis reiciendis illo quaerat mollitia cupiditate odio?</p>
                            <h5>Youssef Mahmoud</h5>
                        </div>
                    </div>

                    <div className="col"></div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default TestSkills;