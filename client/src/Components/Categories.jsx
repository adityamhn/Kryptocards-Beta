import React from 'react'
import "./Categories.scss";
import { CategoriesCard } from './CategoriesCard';
import {BACKEND_URL} from '../constants';


export const Categories = () => {
    const basketballSVG = BACKEND_URL + '/public/assets/Logos/basketball_svg.svg'
    const footballSVG = BACKEND_URL + '/public/assets/Logos/football_svg.svg'
    const animeSVG = BACKEND_URL + '/public/assets/Logos/anime_svg.svg'
    const fictionSVG = BACKEND_URL + '/public/assets/Logos/iron_man_svg.svg';
    return (
        <div className="categories-main-div">
            <div className="main-heading">our <div className="color-primary">
                categories</div></div>
            <div className="categories-cards">
                <CategoriesCard image={basketballSVG} text="BASKETBALL"/>
                <CategoriesCard image={fictionSVG} text="FICTION"/>
                <CategoriesCard image={animeSVG} text="ANIME"/>
                <CategoriesCard image={footballSVG} text="FOOTBALL"/>
           
            </div>
        </div>
    )
}
