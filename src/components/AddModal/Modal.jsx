import React from "react";
import { Component } from "react";
import style from "./Modal.module.css";
import { VscChromeClose } from "react-icons/vsc";
class Modal extends Component {

    state = {
      productName:"",
      productPhoto:"",
      productPrice:"",
      productDescription:""
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    getInformation = (event) => {
        event.preventDefault();
        const { productName, productPhoto, productPrice, productDescription } = this.state;
        const newProduct = {
            id: Date.now(),
            productName,
            productPhoto,
            productPrice,
            productDescription
        };
        //this.setState({info: productInfo})
        //{...{ info: null,test:'test'},...{info: productInfo}}
        this.props.onAddProduct(newProduct);
        this.setState({
            productName: "",
            productPhoto: "",
            productPrice: "",
            productDescription: ""
        });
        this.props.onClose();

    }
    onCloseModal = () => {
        /*const close = this.state.isOpen
        console.log('click')
        //const searchModal = document.querySelector(".backdrop")
        //console.log(searchModal)
        if (close === true) {
            const searchModal = document.querySelector("#modal")
           console.log(searchModal)
            searchModal.classList.remove('hideModal')
           console.log(searchModal)
            this.setState({isOpen: false})
            
        } else {
            const searchModal = document.querySelector("#modal")
            searchModal.classList.add('hideModal')
           this.setState({isOpen: true})
          console.log( this.state.isOpen)
        }*/
          this.setState({ isOpen: false });
    }

    /*const testTask = (a,b) => {
     const sum = a+b;
     return sum;
     }
    //Явне повернення
 
 
 
    //Неявне повернення
    //      const testTask = (a,b) => a+b;
     */





    render() {
        return (
            <div className={style.backdrop}>
                <div className={style.modal}>
                    <button type="button" onClick={this.props.onClose} className={style.closeBtn}>
                        <VscChromeClose />
                    </button>
                    <form onSubmit={this.getInformation}>
                        <label>
                            <input
                                type="text"
                                name="productName"
                                placeholder="Name"
                                value={this.state.productName}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="productPhoto"
                                placeholder="Photo URL"
                                value={this.state.productPhoto}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="number"
                                name="productPrice"
                                placeholder="Price"
                                value={this.state.productPrice}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="productDescription"
                                placeholder="Description"
                                value={this.state.productDescription}
                                onChange={this.handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Modal;