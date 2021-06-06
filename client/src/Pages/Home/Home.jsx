import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {Hero} from '../../Components/Hero'
import './Home.scss'
import {store} from '../../app/store';
import {changeNavbarMode} from '../../features/NavbarLogo/NavbarLogoSlice';
import {WhatWeDo} from '../../Components/WhatWeDo'
import Footer from '../../Components/Footer'
 
import {Tiers} from '../../Components/Tiers';
import { Categories } from '../../Components/Categories';
import { VideoSection } from '../../Components/VideoSection';

export const Home = () => {
    useEffect(()=>{
        store.dispatch(changeNavbarMode({value:"LOGO",show:true}))

    },[])


    return (
        <Container fluid className="background-full">
 
        <div className="layer">
        <Hero />
       
        <WhatWeDo />
        <Tiers/>
        <Categories/>
   
        <Footer />
        
        </div>
        </Container>
    )
}

 