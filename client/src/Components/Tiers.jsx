import React,{useEffect} from 'react'
import {store} from '../app/store'
import { changeNavbarMode } from '../features/NavbarLogo/NavbarLogoSlice';
import {TierSection} from './TierSection';
import './Tiers.scss';
 

export const Tiers = () => {


    

        useEffect(()=>{
            store.dispatch(changeNavbarMode({value:"LOGO",show:true}))
    
        },[])


    

    return (
        <div className="tiers-wrapper">
        <div id="tiers-page-main-div">
                 <div id="main-heading">our<span id="color-secondary"><b>tiers</b></span></div>

            <div id="cards-section">
            <TierSection/>
            
            </div>
       
        </div>
       
             </div>
    )
}
