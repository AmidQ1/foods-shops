import React from "react";
class Modal extends React.Component {
    constructor(props){
        
    }
    render(){

    
    return (
        <div>
            <div>
                <form onSubmit={this.props.openModal}>
                    <label>
                        <input type="text" placeholder="Name" />
                    </label>
                    <label>
                        <input type="text" placeholder="Photo" />
                    </label>
                    <label>
                        <input type="number" placeholder="price" />
                    </label>
                    <label>
                        <input type="text" placeholder="description" />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
}


export default Modal;