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
        showCardModal('gold',`Cards with Midas' Touch`);
    }
    const onSapphireClick = (e)=>{
        showCardModal('sapphire',`A sweet start for your journey of collecting cards.`);
    }
    const onDiamondClick = (e)=>{
        showCardModal('diamond',`For a taste of the high life`)
    }
    const onEmeraldClick = (e)=>{
        showCardModal('emerald','Made for the selected few, with love! We plant 1000 trees for each emerald purchase.')
    }

    return (
        <div id="tier-section-main-div">
       

            <div id="cards-section">
     
                 
                            <div onClick={onSapphireClick} id="sapphire-card-area" className="card-area">
                                <img id="sapphire-card" className="card-styling" src={sapphireCard} />
         
                                <img className="torch-styling" src={silverTorch} />
                            </div>
                 

        
          
                    <div onClick={onGoldClick} id="gold-card-area" className="card-area">
                        <img id="gold-card" className="card-styling" src={goldCard} />

 
                        <img className="torch-styling" src={goldTorch} />
                    </div>
      

         
                    <div onClick={onDiamondClick} id="diamond-card-area" className="card-area">
                        <img id="diamond-card" className="card-styling" src={diamondCard} />
 
                        <img className="torch-styling" src={diamondTorch} />
                    </div>
          
               
                    <div onClick={onEmeraldClick} id="emerald-card-area" className="card-area">
                        <img id="emerald-card" className="card-styling" src={emeraldCard} />
 
                        <img className="torch-styling" src={emeraldTorch} />
                    </div>
        
           

            </div>
        </div>
    )
}
