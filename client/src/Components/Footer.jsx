import React from 'react'
import { Container} from 'react-bootstrap'
import { BACKEND_URL } from '../constants'
import './Footer.scss'
import { GetUpdates } from './GetUpdates'
 


const Footer = ({showGetUpdates = true}) => {
    const linkedinSVG  = BACKEND_URL + '/public/assets/Logos/linkedin_logo.svg'
    const instagramSVG  = BACKEND_URL + '/public/assets/Logos/instagram_logo.svg'
    const emailSVG  = BACKEND_URL + '/public/assets/Logos/email_logo.svg'


    return (

        <Container fluid className="footer-sec-cont">

            <div className="wrapper">
                {showGetUpdates ? <GetUpdates/>:null}
                <hr className="separator" />
                <div className="footer-bottom-portion">
                    <div className="heading-portion">
                        KRYPTO <div className="title2">CARDS</div>
                    </div>
                    <div className="social-media-portion">
                    <a   target="_blank" href="https://www.instagram.com/krypto.cards/">
                        <img className='logo insta-logo' src={instagramSVG} alt="" />
                        </a>
                        <a   target="_blank"  href="https://www.linkedin.com/company/kryptocards/">
                        <img className='logo' src={linkedinSVG} alt="" />
                        </a>
                      
                        <a  target="_blank"  href="mailto:kryptocards@gmail.com">
                        <img className='logo' src={emailSVG} alt="" />
                        </a>
                    </div>
                    <div className="terms-portion">
                        Kryptocards &copy; 2021
                </div>
                </div>
            </div>

        </Container>
    )
}

export default Footer




