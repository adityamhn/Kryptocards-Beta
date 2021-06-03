import React, { useEffect } from 'react'
import { store } from '../../app/store'
import './ComingSoon.scss';
import { changeNavbarMode } from '../../features/NavbarLogo/NavbarLogoSlice';
import { Link } from 'react-router-dom';
export const ComingSoon = () => {
    useEffect(() => {

        store.dispatch(changeNavbarMode({ show: false,value:null }))

    }, [])
    return (

        <div id="coming-soon-text-main-div">
            <div className="container-coming-soon">
                <Link to="/">
                <div class="glitch" data-text="COMING SOON">COMING SOON</div>
                <div class="glow">COMING SOON</div>
                <p class="subtitle">Great Things Take Time</p>
                
                <div class="scanlines"></div>
                </Link>
            </div>

        </div>
    )
}
