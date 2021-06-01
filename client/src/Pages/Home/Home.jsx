import React from 'react'
import { Container } from 'react-bootstrap'
import {Hero} from '../../Components/Hero'
import './Home.scss'

import {WhatWeDo} from '../../Components/WhatWeDo'
import Footer from '../../Components/Footer'



export const Home = () => {
    return (
        <Container fluid className="background-full">
 
        <div className="layer">
        <Hero />
        <WhatWeDo />
        <Footer />
        </div>
        </Container>
    )
}

 