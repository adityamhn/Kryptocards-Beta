import React from 'react'
import './TierSection.scss';
import {BACKEND_URL} from '../constants';
import { Link } from 'react-router-dom';
import { showCardModal } from '../util/cardModals';

export const TierSection = () => {
    const goldCard  =  BACKEND_URL  + '/public/assets/cards/gold.svg';
    const diamondCard  =  BACKEND_URL  + '/public/assets/cards/diamond.svg';
    const sapphireCard  =  BACKEND_URL  + '/public/assets/cards/sapphire.svg';
    const emeraldCard  =  BACKEND_URL  + '/public/assets/cards/Group 55-1.svg';
    const diamondTorch  =  BACKEND_URL  + '/public/assets/Torches/diamond_torch.svg'
    const silverTorch  =  BACKEND_URL  + '/public/assets/Torches/sapphire_torch.svg'
    const goldTorch  =  BACKEND_URL  + '/public/assets/Torches/golde_torch.svg'
    const emeraldTorch  =  BACKEND_URL  + '/public/assets/Torches/emerald_torch.svg'
    const onGoldClick = (e)=>{
        showCardModal('gold',`The Cards With <span style="font-weight:bold;">Midas's Touch</span>`);
    }
    const onSapphireClick = (e)=>{
        showCardModal('sapphire',`A Sweet Start For Your <span style="font-weight:bold;">Journey Of Collecting Cards</span>.`);
    }
    const onDiamondClick = (e)=>{
        showCardModal('diamond',`For A <span style="font-weight:bold;">Taste Of The High Life</span>.`)
    }
    const onEmeraldClick = (e)=>{
        showCardModal('emerald','Made For The Selected Few, With Love! <span style="font-weight:bold;">We Plant 1000 Trees For Each Emerald Purchase</span>.')
    }

    return (
        <div id="tier-section-main-div">
       

            <div id="cards-section">
     
                 
                            <div onClick={onSapphireClick} id="sapphire-card-area" className="card-area">
                                <img id="sapphire-card" className="card-styling" src={sapphireCard} />
         
                                {/* <img className="torch-styling" src={silverTorch} /> */}
                            </div>
                 

        
          
                    <div onClick={onGoldClick} id="gold-card-area" className="card-area">
                        <img id="gold-card" className="card-styling" src={goldCard} />

 
                        {/* <img className="torch-styling" src={goldTorch} /> */}
                    </div>
      

         
                    <div onClick={onDiamondClick} id="diamond-card-area" className="card-area">
                        <img id="diamond-card" className="card-styling" src={diamondCard} />
 
                        {/* <img className="torch-styling" src={diamondTorch} /> */}
                    </div>
          
               
                    <div onClick={onEmeraldClick} id="emerald-card-area" className="card-area">
                        <img id="emerald-card" className="card-styling" src={emeraldCard} />
 
                        {/* <img className="torch-styling" src={emeraldTorch} /> */}
                    </div>
        
           

            </div>
        </div>
    )
}
