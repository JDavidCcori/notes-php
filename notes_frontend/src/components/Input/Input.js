import React from "react";

function Input({setState, value, label, placeholder, type}){



    const onChange =(e) => {
        setState(e.target.value)
    }

    return(

        <div className="field">
        <label className="label">{label}</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" 
           onChange={onChange}
           value= {value}
           placeholder={placeholder}
           
           type={type}
          />
          <span className="icon is-small is-left">
            <i className=""></i>
          </span>
        </div>
      </div>
    )
}

export {Input}