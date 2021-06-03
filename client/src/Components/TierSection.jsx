import React from 'react'
import './TierSection.scss';
import {BACKEND_URL} from '../constants';
import { Link } from 'react-router-dom';

export const TierSection = () => {
    const goldCard  =  BACKEND_URL  + '/public/assets/cards/gold.svg';
    const diamondCard  =  BACKEND_URL  + '/public/assets/cards/diamond.svg';
    const sapphireCard  =  BACKEND_URL  + '/public/assets/cards/sapphire.svg';
    const emeraldCard  =  BACKEND_URL  + '/public/assets/cards/Group 55-1.svg';
    const diamondTorch  =  BACKEND_URL  + '/public/assets/Torches/diamond_torch.svg'
    const silverTorch  =  BACKEND_URL  + '/public/assets/Torches/sapphire_torch.svg'
    const goldTorch  =  BACKEND_URL  + '/public/assets/Torches/golde_torch.svg'
    const emeraldTorch  =  BACKEND_URL  + '/public/assets/Torches/emerald_torch.svg'


    return (
        <div id="tier-section-main-div">
       

            <div id="cards-section">
     
                        <Link to="/coming-soon">
                            <div id="sapphire-card-area" className="card-area">
                                <img id="sapphire-card" className="card-styling" src={sapphireCard} />
         
                                <img className="torch-styling" src={silverTorch} />
                            </div>
                        </Link>

        
                <Link to="/coming-soon">
                    <div id="gold-card-area" className="card-area">
                        <img id="gold-card" className="card-styling" src={goldCard} />

 
                        <img className="torch-styling" src={goldTorch} />
                    </div>
                </Link>

                <Link to="/coming-soon">
                    <div id="diamond-card-area" className="card-area">
                        <img id="diamond-card" className="card-styling" src={diamondCard} />
 
                        <img className="torch-styling" src={diamondTorch} />
                    </div>
                </Link>
                <Link to="/coming-soon">
                    <div id="emerald-card-area" className="card-area">
                        <img id="emerald-card" className="card-styling" src={emeraldCard} />
 
                        <img className="torch-styling" src={emeraldTorch} />
                    </div>
                </Link>
           

            </div>
        </div>
    )
}
