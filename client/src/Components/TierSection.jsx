import React from 'react'
import './TierSection.scss';
import card from '../images/final.svg';
import card2 from '../images/diamond_dark_svg.svg';
//  import card from "../assets/golden_card.png";
import silverTorch from '../assets/Torches/silver-torch.svg'
import bronzeTorch from '../assets/Torches/bronze-torch.svg'
import goldTorch from '../assets/Torches/gold-torch.svg'
import platinumTorch from '../assets/Torches/platinum-torch.svg'
import { Link } from 'react-router-dom';

export const TierSection = () => {



    return (
        <div id="tier-section-main-div">
            <span id="main-heading">select your tier</span>

            <div id="cards-section">
                <Link to="/coming-soon">
                    <div id="bronze-card-area" className="card-area">
                        <img src={card2} className="card-styling" id="bronze-card" />


                        <img className="torch-styling" src={bronzeTorch} />
                    </div>
                </Link>

                <Link to="/coming-soon">
                    <div id="platinum-card-area" className="card-area">
                        <img src={card2} className="card-styling" id="platinum-card" />

                        {/* <div className="card-text">
                for the selected few, made with extreme precision and love
            </div> */}
                        <img className="torch-styling" src={platinumTorch} />
                    </div>
                </Link>
                <Link to="/coming-soon">
                    <div id="gold-card-area" className="card-area">
                        <img id="gold-card" className="card-styling" src={card} />

                        {/* <div className="card-text">
                for the taste of high life
            </div> */}
                        <img className="torch-styling" src={goldTorch} />
                    </div>
                </Link>
                <Link to="/coming-soon">
                    <div id="silver-card-area" className="card-area">
                        <img id="silver-card" className="card-styling" src={card} />

                        {/* <div className="card-text">
                a touch of silver in your cards collection
            </div> */}
                        <img className="torch-styling" src={silverTorch} />
                    </div>
                </Link>

            </div>
        </div>
    )
}
