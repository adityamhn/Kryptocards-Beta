import React from 'react'
import './TierSection.scss';
import card from '../images/final.svg';
import card2 from '../images/diamond_dark_svg.svg';
//  import card from "../assets/golden_card.png";
import silverTorch from '../assets/Torches/silver-torch.svg'
import bronzeTorch from '../assets/Torches/bronze-torch.svg'
import goldTorch from '../assets/Torches/gold-torch.svg'
import platinumTorch from '../assets/Torches/platinum-torch.svg'
import { Link } from 'react-router-dom';

export const TierSection = () => {



    return (
        <div id="tier-section-main-div">
            <span id="main-heading">select your tier</span>

            <div id="cards-section">
     

        
                <Link to="/coming-soon">
                    <div id="gold-card-area" className="card-area">
                        <img id="gold-card" className="card-styling" src={card2} />

                        {/* <div className="card-text">
                for the taste of high life
            </div> */}
                        <img className="torch-styling" src={goldTorch} />
                    </div>
                </Link>

                <Link to="/coming-soon">
                    <div id="silver-card-area" className="card-area">
                        <img id="silver-card" className="card-styling" src={card} />

                        {/* <div className="card-text">
                for the taste of high life
            </div> */}
                        <img className="torch-styling" src={silverTorch} />
                    </div>
                </Link>
                
           

            </div>
        </div>
    )
}
