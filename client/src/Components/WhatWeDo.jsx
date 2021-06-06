import React from 'react'
import './WhatWeDo.scss';
import {BACKEND_URL} from '../constants';
import { Link } from 'react-router-dom';
import { WhatWeDoCard } from './WhatWeDoCard';

export const WhatWeDo = () => {
    const testImage = BACKEND_URL +'/public/assets/test-card.png';
    const returnSix = ()=>{
        const result = [];
        for (let i=0;i<6;i++)result.push(testImage);
        return result;
    }


    return (
        <div id="what-we-do-main-div">
            <div id="what-we-do-heading">
                What <span id="question-mark">  We   </span>  Do
            </div>
            <div className="what-we-do-cards">
                <WhatWeDoCard/>
                <WhatWeDoCard/>
                <WhatWeDoCard/>
                <WhatWeDoCard/>
                
                
            </div>
        </div>
    )
}
