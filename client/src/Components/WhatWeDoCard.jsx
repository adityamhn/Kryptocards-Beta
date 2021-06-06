import React from 'react'
import "./WhatWeDoCard.scss";
import {BACKEND_URL} from '../constants'

export const WhatWeDoCard = () => {
    const testSVG = BACKEND_URL + '/public/assets/Logos/test_svg.svg'
    return (
        <div className="what-we-do-main-div">
              <p className="test-para">
                There is something for everyone. Set your ETH wallet up; explore our website and our tiers, and find what excites you. NFTs are Non-fungible tokens or digital assets which we put on the Ethereum BlockChain. 
                </p>
                <img className="image-styling" src={testSVG}/>
              
        </div>
    )
}
