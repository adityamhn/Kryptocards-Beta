import React, { useState, useEffect, useRef } from 'react'
import { Container, Image } from 'react-bootstrap'
import './Hero.scss'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
 
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { BACKEND_URL } from '../constants';
import { showMessage } from '../util/util';
import Coverflow from 'react-coverflow';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Hero = () => {
    const lelouch = BACKEND_URL + '/public/images/lelouch.svg';
    const peacePain = BACKEND_URL + "/public/images/peace_pain.svg";
    const kobe = BACKEND_URL + "/public/images/kobe bryant.png";
    const neymar = BACKEND_URL + "/public/images/neymar.png";
    
    const [slides, setSlides] = useState([peacePain,lelouch,kobe,neymar]);
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
        
                    <Coverflow
                        width={960}
                        height={480}
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableHeading={false}
                        infiniteScroll
                        active={current}
                    >

                        <div

                            role="menuitem"
                            tabIndex="0"
                        >
                            <Image
                                src={slides[0]}
                                className="swiper-card"

                            />
                        </div>
                        <Image src={slides[1]} />
                        <Image src={slides[2]} />
                        <Image src={slides[3]} />
                    </Coverflow>
                </div>



            </div>
        </Container>
    </>
    )
}
