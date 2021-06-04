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
                Krypto Cards puts on display or collectible cards in the form of NFTs for you to buy. 
                We are revolutionising the legacy of collecting physical cards into a digital one which will 
                awaken the fan within you. We cover various categories from sports to anime. There is something 
                for everyone. Set your ETH wallet up*; explore our website and our tiers, and find what excites you. 
                NFTs are Non-fungible tokens or digital assets which we put on the Ethereum BlockChain. To read more, 
                click here(link to etherium website).
                To counteract the harmful impact of mining, we plant 1000 trees for each Emerald Tier Card purchase. Look at our card tiers here (link)
                *Coming Soon
                </div>

            </div>
        </div>
    )
}
