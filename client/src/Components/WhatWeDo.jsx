import React from 'react'
import './WhatWeDo.scss';
import {BACKEND_URL} from '../constants';
import { Link } from 'react-router-dom';
import { WhatWeDoCard } from './WhatWeDoCard';

export const WhatWeDo = () => {
    const ethereumImage = BACKEND_URL +'/public/assets/Logos/nft_logo.svg';
    const walletImage = BACKEND_URL + '/public/assets/Logos/wallet_svg.svg'
    const treesImage = BACKEND_URL + '/public/assets/Logos/trees_svg.svg'
    const introImage = BACKEND_URL + '/public/assets/Logos/intro_svg.svg'
    


    return (
        <div id="what-we-do-main-div">
            <div id="what-we-do-heading">
                What <span id="question-mark">  We   </span>  Do
            </div>
            <div className="what-we-do-cards">
                <WhatWeDoCard image={introImage} text="Krypto Cards puts on display collectible cards in the form of NFTs for you to buy. We are revolutionising the legacy of collecting physical cards into a digital one which will awaken the fan within you. We cover various categories from sports to anime. "/>
                <WhatWeDoCard image={walletImage} text="There is something for everyone. Set your ETH wallet up; explore our website and our tiers, and find what excites you. NFTs are Non-fungible tokens or digital assets which we put on the Ethereum BlockChain."  />
                <WhatWeDoCard image={ethereumImage} text="A non-fungible token is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable." />
                <WhatWeDoCard image={treesImage} text="To counteract the harmful impact of Ethereum mining, we plant 1000 trees for each Emerald Tier Card purchase. Emerald is our highest card tier and it speaks for itself." />
                
                 
            </div>
        </div>
    )
}
