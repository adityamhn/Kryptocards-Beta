import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../../Components/Hero'
import './Home.scss'

const Home = () => {
    return (
        <Container fluid className="background-full">
        <div className="layer">
        <Hero />

        </div>
        </Container>
    )
}

export default Home
