import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"


const Modal = ({children}) =>{
    return ReactDOM.createPortal(
        <div className="fondo">
            {children}
        </div>,
        document.querySelector("#modal")
    )
}


export {Modal}