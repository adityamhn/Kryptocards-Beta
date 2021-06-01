import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './About.scss'
import cc from '../images/cc.png'
import kobe from '../images/kobe.png'



const About = () => {
    return (
        <Container fluid className="about-sec-cont">
           <div className="wrapper">
               <div className="header">
                   <h1 className="title">WHAT DO WE DO<span className="other-color">?</span></h1>
               </div>
               <div className="details-sec">
                   <div className="links-sec">
                   <div className="link-sec-1">
                   <div className="link">
                   <Image src={cc} className="link-icon" />
                   <div className="category-name">Anime</div>
                   </div>
                   <div className="link">
                   <Image src={kobe} className="link-icon" />
                   <div className="category-name">Basketball</div>
                   </div>
                   <div className="link">
                   <Image src={cc} className="link-icon" />
                   <div className="category-name">Anime</div>
                   </div>
                   </div>

                   <div className="link-sec-1">
                   <div className="link">
                   <Image src={cc} className="link-icon" />
                   <div className="category-name">Anime</div>
                   </div>
                   <div className="link">
                   <Image src={cc} className="link-icon" />
                   <div className="category-name">Anime</div>
                   </div>
                   <div className="link">
                   <Image src={cc} className="link-icon" />
                   <div className="category-name">Anime</div>
                   </div>
                   </div>
                   </div>
                   <div className="info-sec">
                       <p className="info">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis nulla ultricies eros pretium fringilla a id sem. Curabitur alique.
                       </p>
                   </div>
                 
               </div>
           </div>
        </Container>
    )
}

export default About
