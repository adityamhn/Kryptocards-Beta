import React,{useEffect} from 'react'
import {store} from '../../app/store'
import { showNavbar } from '../../features/NavbarLogo/NavbarLogoSlice';
import {TierSection} from '../../Components/TierSection';
import './Tiers.scss';


export const Tiers = () => {


    useEffect(()=>{

        store.dispatch(showNavbar({show:false}));


    },[])

    return (
        <div id="tiers-page-main-div">
                 <div id="main-heading">select your tier</div>

            <div id="cards-section">
            <TierSection/>
            </div>
            
        </div>
    )
}
