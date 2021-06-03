import React from 'react'
import './TierSection.scss';
import goldCard from '../assets/cards/gold.svg';
import diamondCard from '../assets/cards/diamond.svg';
import sapphireCard from '../assets/cards/sapphire.svg';
import emeraldCard from '../assets/cards/Group 55-1.svg';
import diamondTorch from '../assets/Torches/diamond_torch.svg'
import silverTorch from '../assets/Torches/sapphire_torch.svg'
import goldTorch from '../assets/Torches/golde_torch.svg'
import emeraldTorch from '../assets/Torches/emerald_torch.svg'
import { Link } from 'react-router-dom';

export const TierSection = () => {



    return (
        <div id="tier-section-main-div">
       

            <div id="cards-section">
     

        
                <Link to="/coming-soon">
                    <div id="gold-card-area" className="card-area">
                        <img id="gold-card" className="card-styling" src={goldCard} />

                        {/* <div className="card-text">
                for the taste of high life
            </div> */}
                        <img className="torch-styling" src={goldTorch} />
                    </div>
                </Link>

                <Link to="/coming-soon">
                    <div id="silver-card-area" className="card-area">
                        <img id="silver-card" className="card-styling" src={diamondCard} />

                        {/* <div className="card-text">
                for the taste of high life
            </div> */}
                        <img className="torch-styling" src={diamondTorch} />
                    </div>
                </Link>
                <Link to="/coming-soon">
                    <div id="bronze-card-area" className="card-area">
                        <img id="bronze-card" className="card-styling" src={emeraldCard} />

                        {/* <div className="card-text">
                for the taste of high life
            </div> */}
                        <img className="torch-styling" src={emeraldTorch} />
                    </div>
                </Link>
                <Link to="/coming-soon">
                    <div id="platinum-card-area" className="card-area">
                        <img id="platinum-card" className="card-styling" src={sapphireCard} />

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
