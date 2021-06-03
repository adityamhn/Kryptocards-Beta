import React from 'react'
import './WhatWeDo.scss';
import {BACKEND_URL} from '../constants';

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
                What <span id="question-mark">We</span>  Do 
            </div>
            <div id="what-we-do-content">
                <div id="cards-section">
                {
                    returnSix().map(image=>(
                        <div className="card-section">

<img className="card-styling" src={image} />
                        </div>
                        

                    ))
                }
                </div>
                <div id="text-section">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo asperiores perferendis, dolorem reprehenderit quos alias ipsa eos vero et qui quisquam, provident molestias id quaerat voluptas ipsam itaque? Sequi?
                </div>

            </div>
        </div>
    )
}
