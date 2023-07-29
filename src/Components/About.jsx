import React from 'react';
import aboutimage from '../images/about1.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>An engineering student who is fitness enthusiast, loves to do workouts.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;