import React from 'react'
import "./CategoriesCard.scss";
import {BACKEND_URL} from '../constants';
import Tilt from 'react-tilt';



export const CategoriesCard = () => {
    const basketballSVG = BACKEND_URL + '/public/assets/Logos/basketball_svg.svg'
    return (
        <Tilt className="categories-card-main-div" options={{ max : 45 }}  >
          <img className="image" src={basketballSVG}/>
            BASKETBALL 
       </Tilt>
    )
}
