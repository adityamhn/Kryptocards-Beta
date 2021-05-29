import React, { useState, useEffect, useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Hero.scss'
import finalLogo from '../images/finalLogo.svg'
import Navbar from '../Components/Navbar'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md'
import madar_uchiha from '../images/madar_uchiha.gif'
import madara from '../images/madara.svg'
import lelouch from '../images/lelouch.svg'
import {store} from '../app/store';
import {changeLogoSign} from '../features/NavbarLogo/NavbarLogoSlice';


export const Hero = () => {
    const [rotate,setRotate] = useState(0)

    const [slides, setSlides] = useState([lelouch,madara,lelouch,madara]);
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
  
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1);

    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
    
        <Container fluid className="hero-cont">
        <div className="wrapper">
            
        <div className="text-sec">
            <span id="krypto-heading">krypto</span>
            <span id="cards-heading">cards</span>
        </div>
        <div className="details-sec">
        
        </div>
        </div>
        </Container>
        </>
    )
}

 
