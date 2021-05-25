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
        <Navbar />
        <Container fluid className="hero-cont">
        <div className="wrapper">
        <div className="logo-sec">
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="main-logo-without-background">
<g className={current === 0 ? "logo" : current === 1 ? "logo rotate1" : current === 2 ? "logo rotate2" : current === 3 ? "logo rotate3" : "logo"} >
<g id="wing">
<path id="Polygon 114" d="M351.265 0L390 290H310L351.265 0Z" fill="url(#paint0_linear)"/>
<path id="Polygon 115" d="M351.2 0L370.8 145L350.8 290L330.8 145L351.2 0Z" fill="url(#paint1_linear)"/>
</g>
<g id="wing_2">
<path id="Polygon 114_2" d="M180.965 179.624L328.787 286.36L286.36 328.787L180.965 179.624Z" fill="url(#paint2_linear)"/>
</g>
<g id="wing_3">
<path id="Polygon 114_3" d="M519.035 520.376L371.213 413.64L413.64 371.213L519.035 520.376Z" fill="url(#paint3_linear)"/>
</g>
<g id="wing_4">
<path id="Polygon 114_4" d="M179.624 519.035L286.36 371.213L328.787 413.64L179.624 519.035Z" fill="url(#paint4_linear)"/>
</g>
<g id="wing_5">
<path id="Polygon 114_5" d="M518.962 179.551L412.225 327.373L369.799 284.946L518.962 179.551Z" fill="url(#paint5_linear)"/>
</g>
<g id="wing_6">
<path id="Polygon 114_6" d="M0 348.735L290 310V390L0 348.735Z" fill="url(#paint6_linear)"/>
<path id="Polygon 115_2" d="M0 348.8L145 329.2L290 349.2L145 369.2L0 348.8Z" fill="url(#paint7_linear)"/>
</g>
<g id="wing_7">
<path id="Polygon 114_7" d="M348.735 700L310 410H390L348.735 700Z" fill="url(#paint8_linear)"/>
<path id="Polygon 115_3" d="M348.8 700L329.2 555L349.2 410L369.2 555L348.8 700Z" fill="url(#paint9_linear)"/>
</g>
<g id="wing_8">
<path id="Polygon 114_8" d="M700 351.265L410 390V310L700 351.265Z" fill="url(#paint10_linear)"/>
<path id="Polygon 115_4" d="M700 351.2L555 370.8L410 350.8L555 330.8L700 351.2Z" fill="url(#paint11_linear)"/>
</g>
</g>
<g id="main-log-non-rotation-section">
<path id="Vector" d="M410 358.08V341.92C401.745 338.985 396.53 338.16 393.905 331.825V331.82C391.27 325.465 394.405 321.15 398.14 313.285L386.715 301.86C378.91 305.57 374.55 308.735 368.18 306.095H368.175C361.83 303.465 361 298.215 358.08 290H341.92C339.01 298.175 338.175 303.46 331.825 306.095H331.82C325.465 308.735 321.16 305.605 313.285 301.86L301.86 313.285C305.585 321.125 308.735 325.455 306.095 331.82C303.46 338.175 298.175 339.01 290 341.92V358.08C298.16 360.98 303.46 361.825 306.095 368.175C308.745 374.585 305.525 379.005 301.86 386.71L313.285 398.14C321.095 394.425 325.455 391.265 331.82 393.905H331.825C338.175 396.535 339.005 401.8 341.92 410H358.08C360.99 401.82 361.83 396.55 368.215 393.89H368.22C374.53 391.27 378.82 394.395 386.71 398.145L398.135 386.715C394.415 378.9 391.26 374.55 393.895 368.185C396.53 361.83 401.835 360.985 410 358.08V358.08ZM350 370C338.955 370 330 361.045 330 350C330 338.955 338.955 330 350 330C361.045 330 370 338.955 370 350C370 361.045 361.045 370 350 370Z" fill="url(#paint12_radial)"/>
<path id="Ellipse 7" d="M385 350C385 369.33 369.33 385 350 385C330.67 385 315 369.33 315 350C315 330.67 330.67 315 350 315C369.33 315 385 330.67 385 350Z" fill="#1D1D1D"/>
<path id="Vector_2" d="M329.778 340.306C329.778 337.424 329.778 334.543 329.778 331.663C329.778 330.291 330.309 329.786 331.772 329.781C334.322 329.772 336.871 329.772 339.419 329.781C340.861 329.781 341.437 330.33 341.44 331.658C341.44 334.658 341.44 337.657 341.44 340.654C341.447 340.945 341.391 341.234 341.273 341.504C341.156 341.774 340.98 342.019 340.757 342.224C338.131 344.822 335.524 347.436 332.936 350.066C332.343 350.671 331.674 350.994 330.829 350.72C329.985 350.445 329.751 349.74 329.767 348.941C329.791 346.067 329.778 343.197 329.778 340.306Z" fill="url(#paint13_linear)"/>
<path id="Vector_3" d="M362.071 370.765C360.35 370.765 358.618 370.748 356.911 370.765C356.578 370.777 356.246 370.718 355.942 370.593C355.638 370.468 355.368 370.28 355.155 370.044C352.544 367.395 349.912 364.761 347.299 362.115C346.531 361.336 346.539 360.561 347.317 359.767C349.051 358.008 350.793 356.254 352.544 354.507C353.397 353.656 354.403 353.649 355.269 354.507C359.765 359.025 364.258 363.548 368.748 368.074C369.003 368.299 369.176 368.591 369.244 368.91C369.311 369.229 369.27 369.559 369.125 369.856C368.841 370.488 368.254 370.755 367.516 370.752L362.071 370.765Z" fill="url(#paint14_linear)"/>
<path id="Vector_4" d="M329.78 363.634C329.78 361.919 329.799 360.226 329.78 358.52C329.764 358.214 329.816 357.909 329.933 357.622C330.05 357.335 330.229 357.074 330.46 356.854C339.177 348.096 347.885 339.331 356.584 330.557C356.816 330.299 357.108 330.094 357.439 329.957C357.77 329.821 358.131 329.756 358.494 329.768C361.901 329.792 365.311 329.782 368.719 329.768C369.532 329.768 370.254 329.883 370.615 330.66C370.976 331.436 370.652 332.042 370.06 332.637C357.71 345.067 345.37 357.496 333.039 369.924C332.402 370.569 331.732 370.975 330.79 370.642C329.847 370.309 329.764 369.554 329.772 368.748C329.794 367.045 329.78 365.34 329.78 363.634Z" fill="url(#paint15_linear)"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear" x1="-76.5218" y1="7.55208" x2="-76.5218" y2="297.552" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="350.8" y1="0" x2="350.8" y2="290" gradientUnits="userSpaceOnUse">
<stop stop-color="#17FFFF"/>
<stop offset="1" stop-opacity="0.72"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="-42.5885" y1="409.806" x2="84.6908" y2="537.086" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="742.588" y1="290.194" x2="615.309" y2="162.914" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="409.806" y1="742.588" x2="537.086" y2="615.309" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="288.78" y1="-44.0026" x2="161.5" y2="83.2766" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="7.55208" y1="776.522" x2="297.552" y2="776.522" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="0" y1="349.2" x2="290" y2="349.2" gradientUnits="userSpaceOnUse">
<stop stop-color="#17FFFF"/>
<stop offset="1" stop-opacity="0.72"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="776.522" y1="692.448" x2="776.522" y2="402.448" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="349.2" y1="700" x2="349.2" y2="410" gradientUnits="userSpaceOnUse">
<stop stop-color="#17FFFF"/>
<stop offset="1" stop-opacity="0.72"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="692.448" y1="-76.5218" x2="402.448" y2="-76.5218" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="0.9999" stop-color="#00FFFF" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint11_linear" x1="700" y1="350.8" x2="410" y2="350.8" gradientUnits="userSpaceOnUse">
<stop stop-color="#17FFFF"/>
<stop offset="1" stop-opacity="0.72"/>
</linearGradient>
<radialGradient id="paint12_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 350) rotate(90) scale(60)">
<stop stop-color="#0D0D0D" stop-opacity="0"/>
<stop offset="1" stop-color="#00FFFF"/>
</radialGradient>
<linearGradient id="paint13_linear" x1="335.603" y1="329.774" x2="335.603" y2="350.819" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="1" stop-color="#ADF4F4" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint14_linear" x1="358.002" y1="353.866" x2="358.002" y2="370.766" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="1" stop-color="#66E2E2" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear" x1="350.269" y1="329.766" x2="350.269" y2="370.761" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFFF"/>
<stop offset="1" stop-color="#77D9D9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

         
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
