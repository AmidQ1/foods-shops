import React from 'react';
import ReactDOM from 'react-dom/client';
import {foodsData} from '../data.js'
import style from './FoodsList.module.css';


function FoodsList(){
    return (
        <div>
            <h1 className={style.title}>Foods List</h1>
            <ol className={style.foodList}>
                {foodsData.map((food)=>{
                    return (
                        <li className={style.foodItem}>
                            <h2>{food.name}</h2>
                            <p>{food.prise}</p>
                            <p>{food.subtitle}</p>
                            <img src={food.imgUrl} alt="Think just" />
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default FoodsList;