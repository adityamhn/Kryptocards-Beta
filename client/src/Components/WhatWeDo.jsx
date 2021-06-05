import React from 'react'
import './WhatWeDo.scss';
import {BACKEND_URL} from '../constants';
import { Link } from 'react-router-dom';

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
                What <span id="question-mark">We</span>  Do?
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
                Krypto Cards puts on display or collectible 
                cards in the form of 
                  <a target="_blank" href="https://en.wikipedia.org/wiki/Non-fungible_token"><span className="color-primary"> NFTs</span> </a> 
                for you to buy. 
                We are revolutionising the legacy of collecting physical cards into a digital one which will 
                awaken the fan within you. We cover various categories <span className="color-primary">from sports to anime</span>. There is something 
                for everyone. <span className="color-primary">Set your ETH wallet up</span>; explore our website and our <Link to='/tiers'><span className="color-primary">tiers</span></Link>, and find what excites you. 
                NFTs are Non-fungible tokens or digital assets which we put on the <a target="_blank" href="https://ethereum.org/en/"><span className="color-primary">Ethereum BlockChain</span>.</a>
                To counteract the <a target="_blank" href="https://www.livemint.com/market/cryptocurrency/how-does-bitcoin-mining-impact-the-environment-11620898893877.html"><span className="color-primary">harmful impact of mining</span></a>, we plant 1000 trees for each  <Link to='/tiers'><span className="color-primary">Emerald Tier Card</span></Link> purchase.
                </div>

            </div>
        </div>
    )
}
