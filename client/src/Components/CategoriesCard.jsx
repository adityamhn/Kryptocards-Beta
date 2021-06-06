import React from 'react'
import "./CategoriesCard.scss";

import Tilt from 'react-tilt';



export const CategoriesCard = ({image,text}) => {
    
    return (
        <Tilt className="categories-card-main-div" options={{ max : 45 }}  >
            <div className="image-wrapper">
            <img className="image" src={image}/>
            </div>
          
            <div className="text">
            {text} 
            </div>
            
       </Tilt>
    )
}
