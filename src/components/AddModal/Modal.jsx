import React, { Component } from "react";
import style from "./Modal.module.css";
import { VscChromeClose } from "react-icons/vsc";
class Modal extends React.Component {
    constructor(props){
       super(props)
       this.state = {
        info: null
       }
    }
    getInformation(event){
        event.preventDefault();
        const name = event.target.elements.productName.value;
        const photo = event.target.elements.productPhoto.value;
        const price = event.target.elements.productPrice.value;
        const description = event.target.elements.productDescription.value;
        const productInfo = {
            productName: name,
            productPhoto: photo,
            productPrice: price,
            productDescription: description
        }
        // this.setState(productInfo)
    }
    render(){

    
    return (
        <div className={style.backdrop}>
            <div className={style.modal}>
                <VscChromeClose className={style.close} />
                <form onSubmit={this.getInformation}>
                    <label>
                        <input type="text" name="productName" placeholder="Name" />
                    </label>
                    <label>
                        <input type="text" name="productPhoto" placeholder="Photo" />
                    </label>
                    <label>
                        <input type="number" name="productPrice" placeholder="price" />
                    </label>
                    <label>
                        <input type="text" name="productDescription" placeholder="description" />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
}


export default Modal;