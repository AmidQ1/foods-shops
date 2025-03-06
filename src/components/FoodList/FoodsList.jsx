import React from 'react';
import {foodsData} from '../../data.js'
import style from './FoodsList.module.css';
import FoodItem from '../FoodsItem/FoodItem.jsx';
import Modal from '../AddModal/Modal.jsx';
/*const  FoodsList = () => {
    return (
        <div>
            <h1 className={style.title}>Foods List</h1>
            <ol className={style.foodList}>
                {foodsData.map((fooddata)=>{
                    return (
                 <FoodItem food={fooddata} />
                    )
                })}
            </ol>
        </div>
    )
}*/

class FoodsList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            food:foodsData,
            isOpen:false
        }
       
    }
    onOpenModal(){
      console.log("Test")
    }
    addProduct(){
    
    }

    render(){
       
        return (
            <div>
                
                <h1 className={style.title}>Foods List</h1>
                <button onClick={this.addProduct}>Add product</button>
                <ol className={style.foodList}>
                    {foodsData.map((fooddata)=>{
                        return (
                     <FoodItem food={fooddata} />
                        )
                    })}
                </ol>
            <Modal openModal={this.onOpenModal}/>
            </div>
        )
    }
 
}


export default FoodsList;