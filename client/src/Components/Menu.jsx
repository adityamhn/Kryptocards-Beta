import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import './Menu.scss'
import spiderman from "../images/fiction.jpg";
import basketball from "../images/basketball.jpg";
import football from "../images/football.jpg";
import konoha from "../images/anime.jpg";
import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleCityReturn,
    handleCity,
    staggerRevealClose
  } from "./Animations";

const cities = [
  { name: "Basketball", image: basketball },
  { name: "Football", image: football },
  { name: "Anime", image: konoha },
  { name: "Fiction", image: spiderman }
];



const Menu = ({state}) => {

      // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      staggerText( line2, line3);
    }
  }, [state]);


    return (
        <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/coming-soon'>
                      Explore
                    </Link>
                  </li>
                  <li id="up">
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact'>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
          
              <div className='locations'>
                Categories:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <Link className="menu-link" to="/coming-soon">
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                  </Link>
                  
                ))}
              </div>

          
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Menu
