import React, { useState, useEffect, useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Hero.scss'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
 
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { BACKEND_URL } from '../constants';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Hero = () => {
    const madara = BACKEND_URL + '/public/images/madara.svg'
    const lelouch = BACKEND_URL + '/public/images/lelouch.svg'
    
    
    const [slides, setSlides] = useState([madara,lelouch]);
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
            <Container fluid className="hero-cont">
                <div className="hero-wrapper">
                    <div className="title-sec">
                        <h1 className="title1">KRYPTO</h1>
                        <h1 className="title2">CARDS</h1>

                    </div>
                    <div className="swiper-sec">
                        <div className="fore-ground" />
                        {slides.map((slide, index) => {
                            return (
                                <>

                                    <div className="swiper-card-sec" key={index}>

                                        {index === current && (
                                            <>

                                                <Image src={index === 0 ? slides[slides.length - 1] : slides[index - 1]} className="swiper-card inactive-card" />
                                                <Image src={slides[index]} className="card-active swiper-card" />
                                                <Image src={index === slides.length - 1 ? slides[0] : slides[index + 1]} className="swiper-card inactive-card" />
                                            </>

                                        )}


                                    </div>
                                </>
                            )

                        })}
                    </div>



                </div>
            </Container>
        </>
    )
}
