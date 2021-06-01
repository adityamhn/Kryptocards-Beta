import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../../Components/Hero'
import './Home.scss'
import Navbar from '../../Components/Navbar'
import About from '../../Components/About'
import Footer from '../../Components/Footer'



const Home = () => {
    return (
        <Container fluid className="background-full">
        <Navbar />
        <div className="layer">
        <Hero />
        <About />
        <Footer />
        </div>
        </Container>
    )
}

export default Home
