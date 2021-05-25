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
    const [rotate,setRotate] = useState(0)

    const [slides, setSlides] = useState([lelouch,madara,lelouch,madara]);
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000);

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
        <Navbar />
        <Container fluid className="hero-cont">
        <div className="wrapper">
        <div className="logo-sec">
        <Image src={finalLogo} className={current === 0 ? "logo" : current === 1 ? "logo rotate1" : current === 2 ? "logo rotate2" : current === 3 ? "logo rotate3" : "logo"} />
        </div>
        <div className="details-sec">
        <MdNavigateBefore className="icon" onClick={prevSlide} />
        <div className="slider-cont">
        {slides.map((slide,index) => (
            <div className="slider" key={index}>
            {index === current && (
                <Image src={slide} className="content-img" />
                
            )}
                {/* <div className="text">
                Lorem ipsuvvm dolor sit amet, consectetur adipiscing elit. Sed in aliquam nulla, ut iaculis felis. Aenean ac vestibulum ex. Quisque lor pellentesque mollis. 
                </div> */}
            </div>
        ))}
        </div>
            
        <MdNavigateNext className="icon" onClick={nextSlide} />

       
        </div>
        </div>
        </Container>
        </>
    )
}

export default Hero
