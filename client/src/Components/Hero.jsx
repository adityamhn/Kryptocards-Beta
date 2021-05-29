import React, { useState, useEffect, useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Hero.scss'
import finalLogo from '../images/finalLogo.svg'
import Navbar from '../Components/Navbar'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md'
import madar_uchiha from '../images/madar_uchiha.gif'
import madara from '../images/madara.svg'
import lelouch from '../images/lelouch.svg'



const Hero = () => {
 

    return (
        <>
        <Container fluid className="hero-cont">
        <div className="hero-wrapper">
            <div className="title-sec">
                <h1 className="title1">KRYPTO</h1>
                <h1 className="title2">CARDS</h1>
            </div>
        </div>       
        </Container>
        </>
    )
}

export default Hero
