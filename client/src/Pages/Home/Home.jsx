import React,{useEffect} from 'react'
import {Hero} from '../../Components/Hero';
import {store} from '../../app/store';
import {changeLogoSign,
    showNavbar} from '../../features/NavbarLogo/NavbarLogoSlice';
import { WhatWeDo } from '../../Components/WhatWeDo';
import './Home.scss';
import { TierSection } from '../../Components/TierSection';


export const Home = () => {

    useEffect(() => {
        store.dispatch(changeLogoSign({value:"LOGO"}))
        store.dispatch(showNavbar({show:true}))
    
   

    }, [])
    return (
        <div className="background-full">
            <div className="layer">
            <Hero/>
            <WhatWeDo/>
            <TierSection/>
            </div>
            
        </div>
    )
}
