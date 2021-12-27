import React from 'react'
import Nav from './Nav'
import Intro from './Intro'
import Serv from './Services'
import Portfolio from './Portfolio'
import vid from './video/vid.mp4'
import About from './About'
import Pricing from './Pricing'
import Contact from './Contact'

const  App =(props)=> {

    return (
        <React.Fragment>
            <Nav />
            <Intro />
            <Serv />
            <Portfolio />
            <div className='p-2 m-3 vid-cont'>
                <video width='90%' className='vid' loop muted autoplay='true' >
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="vid-text-div">
                    <h3 className='' >We Make It Better Every day</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum quis necessitatibus, alias nobis odio quia ipsa qui!</p>
                </div>
            </div>
            <About />
            <Pricing />
            <Contact />
        </React.Fragment>

    )
}

export default App;