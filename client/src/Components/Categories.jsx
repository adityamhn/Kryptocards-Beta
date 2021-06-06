import React from 'react'
import "./Categories.scss";
import { CategoriesCard } from './CategoriesCard';
export const Categories = () => {
    return (
        <div className="categories-main-div">
            <div className="main-heading">our <div className="color-primary">
                categories</div></div>
            <div className="categories-cards">
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
                <CategoriesCard/>
           
            </div>
        </div>
    )
}
