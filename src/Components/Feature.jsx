import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature(){
    return(
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox image={fimage1} title="Weight Lifting" para="Victory isn’t defined by wins and losses, it’s defined by effort."/>
                <Featurebox image={fimage2} title="Specific Muscle" para="The last 3 or 4 reps is what makes the muscle grow."/>
                <Featurebox image={fimage3} title="Flex Your Muscle" para="If you can build a muscle, then you can build a mindset."/>
                <Featurebox image={fimage4} title="Cardio Exercise" para="A cardio workout increases blood flow and acts as a filter system."/>
            </div>
        </div>
    )
}

export default Feature;